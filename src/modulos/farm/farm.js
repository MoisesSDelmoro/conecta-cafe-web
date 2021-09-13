import { Form, Segment, Label, Input, Button } from "semantic-ui-react"
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Template, FarmButton } from './styled';


function PageFarm() {
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
            <Template>
                <Segment className='page_farm'>
                    <Form>
                        <Label className='title_farm'>
                            Fazenda
                        </Label>
                        <FarmButton>
                            <Button className='option_button'>
                                História
                            </Button>
                            <Button className='option_button'>
                                Fotos/Vídeos
                            </Button>
                            <Button className='option_button'>
                                QR Code
                            </Button>
                            <Button className='option_button'>
                                Localização
                            </Button>
                            <Button className='option_button'>
                                Contato
                            </Button>
                        </FarmButton>
                        <Input placeholder='variedade' className='input_form' id='variedade' />
                        <Input placeholder='altitude' className='input_form' />
                        <Input placeholder='colheita' className='input_form' />

                        <Input placeholder='valor na colheita' className='input_form' />
                        Nome da fazenda: {user?.data.farm_name}
                        <Button >ENVIAR</Button>
                    </Form>
                </Segment>
            </Template>
        </>
    )
}

export default PageFarm