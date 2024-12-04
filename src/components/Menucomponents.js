import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'; // Importa o componente DishDetail

const MenuComponentes = (props) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish); // Atualiza o prato selecionado
  };

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {/* Passa o prato selecionado para o componente DishDetail */}
          <DishDetail dish={selectedDish} />
        </div>
      </div>
    </div>
  );
};

export default MenuComponentes;
