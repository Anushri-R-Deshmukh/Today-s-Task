import { Meal } from "../Meal-Apis/meal";

export interface FoodSearchResult {
  foodSearchCriteria: {
    generalSearchInput: string;
    pageNumber: number;
    requireAllWords: boolean;
  };
  totalHits: number;
  currentPage: number;
  totalPages: number;
  foods: [Meal];
}
