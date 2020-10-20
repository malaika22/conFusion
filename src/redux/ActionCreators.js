import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment
  }
}); 


export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 1000);
}


export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});


export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});


export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});


export const fetchComments = () => (dispatch) => {

  dispatch(dishesLoading(true));

  setTimeout(() => {
      dispatch(addComments(COMMENTS));
  }, 1000);
};

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});


export const fetchPromos = () => (dispatch) => {

  dispatch(promosLoading(true));

  setTimeout(() => {
      dispatch(addPromos(PROMOTIONS));
  }, 1000);
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});




export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
});

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});


export const fetchLeaders = () => (dispatch) => {

  dispatch(leadersLoading(true));

  setTimeout(() => {
      dispatch(addLeaders(LEADERS));
  }, 1000);
}
