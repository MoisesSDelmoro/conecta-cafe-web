import { Segment, Label, Button, Input } from "semantic-ui-react"
import { Template, FarmButton, FarmFields } from './styled';
import React, { useEffect, useState } from "react";
import api from "../../services/api";


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


    const handleclickHistory = () => {
        console.log("Cliquei Aqui em História!!!")
    }

    const handleclickPhotos = () => {
        console.log("Cliquei Aqui em Fotos!!!")
    }

    const handleclickQRcode = () => {
        console.log("Cliquei Aqui em QR Code!!!")
    }

    const handleclickLocation = () => {
        console.log("Cliquei Aqui em Localização!!!")
    }

    const handleclickContact = () => {
        console.log("Cliquei Aqui em Contato!!!")
    }

    return (
        <>
            <Template>
                <Segment className='page_farm'>

                    <Label className='title_farm'>
                        Fazenda
                    </Label>
                    <FarmButton>
                        <Button className='option_button' onClick={handleclickHistory}>
                            História
                        </Button>
                        <Button className='option_button' onClick={handleclickPhotos} >
                            Fotos/Vídeos
                        </Button>
                        <Button className='option_button' onClick={handleclickQRcode}>
                            QR Code
                        </Button>
                        <Button className='option_button' onClick={handleclickLocation}>
                            Localização
                        </Button>
                        <Button className='option_button' onClick={handleclickContact}>
                            Contato
                        </Button>
                    </FarmButton>

                    <FarmFields>

                        <Label className='sub_title_farm'>Contato</Label>


                        <Label className='title_fields'>Telefone</Label>


                        <Input placeholder='Entre com seu telefone' className='input_form' id='variedade' />

                        <Input placeholder='Entre com seu e-mail' className='input_form' />

                    </FarmFields>
                    Nome da fazenda: {user?.data.farm_name}
                    <Button >ENVIAR</Button>

                </Segment>
            </Template>
        </>
    )
}

export default PageFarm