import React, { useState } from 'react';
import Card from './Card';
import CaloriesRender from './CaloriesRender';

function List({ list, recipeDelete, upDateRecipe }) {
    const [active, setActive] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedCalories, setEditedCalories] = useState('');
    const [editedServings, setEditedServings] = useState('');
    const [editedImage, setEditedImage] = useState('');

    const setEdit = (recipe) => {
        setActive(true);
        setEditingId(recipe.id);
        setEditedName(recipe.name);
        setEditedCalories(recipe.calories);
        setEditedServings(recipe.servings);
        setEditedImage(recipe.image);
    };

    const sendEdit = () => {
        const editedFood = {
            id: editingId,
            name: editedName,
            calories: editedCalories,
            image: editedImage,
            servings: editedServings,
        };
        upDateRecipe(editedFood);
        setActive(false);
        setEditingId(null);
    };

    return (
        <div className="card-container">
            {list.map(recipe => (
                <Card
                    key={recipe.id}
                    imgSrc={recipe.image}
                    imgAlt={`Image of ${recipe.name}`}
                    title={recipe.name}
                    description={<CaloriesRender calories={recipe.calories} />}
                    buttonText="Edit"
                    onEdit={active && editingId === recipe.id ? sendEdit : () => setEdit(recipe)}
                    onDelete={() => recipeDelete(recipe.id)}
                    editMode={active && editingId === recipe.id}
                    placeholder={editedName}
                    caloriesPlaceholder={editedCalories}
                    servingsPlaceholder={editedServings}
                    imagePlaceholder={editedImage}
                    onNameChange={(e) => setEditedName(e.target.value)}
                    onCaloriesChange={(e) => setEditedCalories(e.target.value)}
                    onServingsChange={(e) => setEditedServings(e.target.value)}
                    onImageChange={(e) => setEditedImage(e.target.value)}
                />
            ))}
        </div>
    );
}

export default List;