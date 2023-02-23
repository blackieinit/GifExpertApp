import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

export default function AddCategory( { onNewCategory } : any ) {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ( { target } : any ) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event : any ) => {
        event.preventDefault();
        const newValue = inputValue.trim()
        if ( newValue.length <= 1 ) return
        
        onNewCategory( newValue )
        setInputValue('')
    }

    return (
        <>
        <Form onSubmit={ onSubmit }>
            <Row className="align-items-center">
                <Col xs="auto" md="10">
                    <Form.Control
                        type="text"
                        value={inputValue}
                        className="mb-2"
                        placeholder="Naruto"
                        onChange={ onInputChange }
                    />
                </Col>
                <Col xs="auto" md="2" className="d-grip gap-2">
                    <Button /* onSubmit={onAddCategory} */ className="mb-2 col-md-12">
                        Agregar categoría
                    </Button>
                </Col>
            </Row>
        </Form>
        </>
    )
}