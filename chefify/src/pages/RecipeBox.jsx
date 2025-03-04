import React, { useState } from "react";
import { Container, Row, Col, Nav, Card, Button, Pagination, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const recipes = [
  { title: "Italian-style tomato salad", time: "14 minutes", img: "./public/food3.jpg" },
  { title: "Vegetable and shrimp spaghetti", time: "15 minutes", img: "./public/food2.jpg" },
  { title: "Lotus delight salad", time: "20 minutes", img: "./public/food3.jpg" },
  { title: "Snack cakes", time: "21 minutes", img: "./public/food4.jpg" },
  { title: "Salad with cabbage and shrimp", time: "32 minutes", img: "./public/food2.jpg" },
  { title: "Bean, shrimp, and potato salad", time: "32 minutes", img: "./public/food4.jpg" },
  { title: "Sunny-side up fried eggs", time: "32 minutes", img: "./public/food2.jpg" },
  { title: "Lotus delight salad", time: "32 minutes", img: "./public/food4.jpg" },
  { title: "Grilled Chicken", time: "25 minutes", img: "./public/food3.jpg" },
  { title: "Pasta Primavera", time: "30 minutes", img: "./public/food2.jpg" },
  { title: "Beef Steak", time: "45 minutes", img: "./public/food3.jpg" },
  { title: "Sushi Rolls", time: "50 minutes", img: "./public/food4.jpg" },
];

const ITEMS_PER_PAGE = 8;
function RecipeBox() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentRecipes = recipes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-4">
        <Col xs="auto">
          <Image style={{ width: "15vw", height: "15vw" }} src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/383172321_1522837575141911_5488137973004724445_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHvcclT4f9cG1elUFqxcCIKgoWR4MVyJiuChZHgxXImK_38MxyD6IVq3yqRAc-56VLKpLI9EaoWQrVFq16Agk7c&_nc_ohc=JRjan_ln4mAQ7kNvgEaUFdF&_nc_oc=AdhBjprVy378g2Yav16ph7RxvDUVt2zXnMozZtQSqh6fAEwLMCL48TrIrrTXLT1k9CQ&_nc_zt=23&_nc_ht=scontent.fsgn3-1.fna&_nc_gid=AJktkAk7Wgnq8xo8nIVVj1q&oh=00_AYD28QZPhBfVgi_rLrZhzyHUDiEuog-F8i_nRuQ4bNd-mQ&oe=67C827AE" roundedCircle />
        </Col>
        <Col>
          <h2>Emma Gonzalez's Recipe Box</h2>
          <p>
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times.
          </p>
          <Button variant="pink">Share</Button>
        </Col>
      </Row>
      <Nav variant="tabs" defaultActiveKey="saved">
        <Nav.Item>
          <Nav.Link eventKey="saved">Saved Recipes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="folders">Folders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="recipes">Recipes by Genevieve</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className="mt-3">
        {currentRecipes.map((recipe, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={recipe.img} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <small className="text-muted">{recipe.time}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, idx) => (
          <Pagination.Item 
            key={idx + 1} 
            active={idx + 1 === currentPage} 
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
}

export default RecipeBox;
