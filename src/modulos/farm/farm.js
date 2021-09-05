import { Segment, Label } from "semantic-ui-react"
import React, { useEffect, useState } from "react";
import './farm.css'
import api from "../../services/api";

const PageFarm = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/farm/c43ecfab-69f0-46bd-aa38-4af3796350cf")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
        <>
            <Segment className='page_farm'>
                <Label  className='title_farm'>
                    Fazenda
                    Nome da fazenda: {user?.data.farm_name}
                </Label>
            </Segment>
        </>
   
  
  );
}

export default PageFarm