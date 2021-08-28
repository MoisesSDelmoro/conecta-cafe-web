import { Segment, Label, Input } from "semantic-ui-react"
import './coffee.css'

const PageCoffee = () => {
    const special = 0;
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