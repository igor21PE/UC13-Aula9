import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const DishDetail = (props) => {
  const { dish } = props; // Obtendo o prato da propriedade 'dish'
  
  // Função renderDish que retorna o JSX para exibir os detalhes do prato
  const renderDish = (dish) => {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  };

  // Função renderComments que retorna a lista de comentários
  const renderComments = (comments) => {
    if (comments != null && comments.length > 0) {
      return (
        <div>
          <h4>Comments</h4>
          <ListGroup>
            {comments.map((comment, index) => (
              <ListGroupItem key={index}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {comment.date}</p>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      );
    } else {
      return <div></div>; // Se não houver comentários, retorna uma div vazia
    }
  };

  // Verificação se o prato foi selecionado
  if (dish != null) {
    // Renderiza a div com o layout responsivo
    return (
      <div className="row">
        {/* Div para o Card do prato */}
        <div className="col-12 col-md-5 m-1">
          {renderDish(dish)} {/* Chama a função renderDish para exibir o prato */}
        </div>

        {/* Div para a lista de comentários */}
        <div className="col-12 col-md-5 m-1">
          {renderComments(dish.comments)} {/* Chama a função renderComments para exibir os comentários */}
        </div>
      </div>
    );
  } else {
    // Se não houver prato selecionado, retorna um div vazio
    return <div></div>;
  }
};

export default DishDetail;

