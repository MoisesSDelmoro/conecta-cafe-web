import { Segment, Label, Input, Button } from "semantic-ui-react"
import './coffee.css'
import { coffee } from "../stores/coffee";

const PageCoffee = () => {
    const special = 0;

    const handleSave = () => {
        coffee.save();
      };

    return (
        <>
            <Segment className='page_coffee'>
                <Label className='title_coffee'>
                    Café
                </Label>
                <Input placeholder='variedade' />
                <Input placeholder='altitude' />
                <Input placeholder='colheita' />
                <Input placeholder='valor na colheita' />
                <Button onClick={handleSave}>ENVIAR</Button>
                {
                    special ?
                        <>
                            <Input placeholder='aroma' />
                            <Input placeholder='sabor' />
                            <Input placeholder='acidez' />
                            <Input placeholder='corpo' />
                            <Input placeholder='doçura' />
                        </>
                        :
                        <></>
                }
            </Segment>
        </>
    )
}

export default PageCoffee