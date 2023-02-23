import { useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import AddCategory from "./components/AddCategory"

export default function GiftExpertApp() {

    const [categories, setCategories] = useState([ 'one punch', 'sword art online' ])

    const onAddCategory = ( newCategory: string ) => {
        const lowerNewCategory = newCategory.toLocaleLowerCase()
        if ( categories.includes( lowerNewCategory ) ) return;
        setCategories( [ lowerNewCategory.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) , ...categories ])
    }

    return(
        <>
            <Container>
                <Row className="mt-5">
                    <Col md="12">
                        <Card>
                            <Card.Header className="text-center">GifExpertApp</Card.Header>
                            <Card.Body>
                                <AddCategory
                                    onNewCategory={ (event: string) => onAddCategory( event ) }>
                                </AddCategory>
                                <ol>
                                    { 
                                        categories.map( category => {
                                            return <li key={category}>{ category }</li>
                                        }) 
                                    }
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>
                
                </Row>
            </Container>
        </>
    )
}