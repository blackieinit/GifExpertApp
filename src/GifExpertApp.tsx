import { useState } from "react"
import { Alert, Card, Col, Container, Row } from "react-bootstrap"
import AddCategory from "./components/AddCategory"
import Footer from "./components/Footer"

export default function GiftExpertApp() {

    const [categories, setCategories] = useState([ 'One Punch', 'Sword Art Online' ])
    const [error, setError] = useState(false)

    const onAddCategory = ( newCategory: string ) => {
        const lowerNewCategory = newCategory.toLocaleLowerCase()
        const lowerCategories = categories.slice()

        lowerCategories.map((lowerCategory, i) => {
            lowerCategories[i] = lowerCategory.toLowerCase()
        })
        
        if ( lowerCategories.includes( lowerNewCategory ) ) {
            setError( true )
            return;
        };
        setError( false )
        setCategories( [ lowerNewCategory.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) , ...categories ])
    }

    return(
        <>
            <Container>
                <Row className="mt-5">
                    
                    <Col md="12">
                        { error ? (
                            <Row>
                                <Col md="12">
                                    <Alert variant="danger" className="text-center">
                                        <b>La categoría ingresada ya se encuentra registrada</b>
                                    </Alert>
                                </Col>
                            </Row>
                        ) : (
                            <Row>
                                <Col md="12">
                                </Col>
                            </Row>
                            )
                        }
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
            <Footer></Footer>
        </>
    )
}