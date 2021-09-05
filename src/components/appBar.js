import React from 'react'
import { Image, Header, Label, Button } from 'semantic-ui-react'
import logoImage from '../assets/logo2w.png'
import './appBar.css'

const SimpleMenu = props => {
    return (
        // <Menu>
        <>
            <Header
                className='appBar'>
                <Image
                    src={logoImage}
                    size='massive'
                />
                <Header
                    className='appBar__fields'>
                    <Label as='a'>
                        Home
                    </Label>
                    <Label as='a'>
                        Outras Fazendas
                    </Label>
                    <Label as='a'>
                        |
                    </Label>
                    <Label as='a'>
                        Fazenda
                    </Label>
                    <Label as='a'>
                        Café
                    </Label>
                    <Button className='black_button'>Sair</Button>

                </Header>
            </Header>
        </>
    )
}

export default SimpleMenu