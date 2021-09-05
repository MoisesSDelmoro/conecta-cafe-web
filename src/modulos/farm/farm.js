import { Form, Segment, Label, Input, Button } from "semantic-ui-react"
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
                <Form>
                <Label className='title_farm'>
                    Fazenda
                </Label>
                    <Form.Field className='form'
                        id='variedadef'
                        label='variedade'
                        placeholder='variedadef'
                    />
                    <Input placeholder='variedade' className='input_form' id='variedade' />
                    <Input placeholder='altitude' className='input_form'/>
                    <Input placeholder='colheita' className='input_form'/>

                    <Input placeholder='valor na colheita' />
                    Nome da fazenda: {user?.data.farm_name}
                    <Button >ENVIAR</Button>
                </Form>
            </Segment>
        </>
    );
}

export default PageFarm