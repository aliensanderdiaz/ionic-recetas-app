import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Spaguettis',
      imageUrl: 'https://www.johaprato.com/files/styles/immagini_ricette/public/spaguettis_con_estofado.jpg',
      ingredients: ['Tomates', 'Spaguetti', 'Carne Molida']
    },
    {
      id: 'r2',
      title: 'Lentejas',
      imageUrl: 'https://www.recetasderechupete.com/wp-content/uploads/2009/10/lentejas.jpg',
      ingredients: ['Tomates', 'Lentejas', 'Cebolla']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find(recipe => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId );
  }
}
