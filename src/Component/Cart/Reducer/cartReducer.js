import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM } from "../actions/actionTypes";
import { LOGIN, LOGOUT } from "../../LoginRedux/Action/actionTypes";

const initState = {
  addedMedicines: [],
  medicineIds: [],
  totalItems: 0,
  totalPrice: 0,

  loggedUser: {},
};

//let addedItem = []
const cartReducer = (state = initState, action) => {
  //Inside MEDICINE COMPONENT
  if (action.type === ADD_TO_CART) {
    console.log("ELEMENTS in statemedicine : ", state.addedMedicines);
    //console.log("ADD TO CART CALLED")
    //console.log(action.medicine)
    //let med = action.medicine
    //console.log("Length of addedITEM ",addedItem.length)

    let addmed = action.medicine;
    let medid = action.medicine.medicineId;
    let itemIDtoObj = '{"medicineId":' + medid + "}";
    let jsonObj = JSON.parse(itemIDtoObj);
    console.log(jsonObj);
    let medprice = action.medicine.medicinePrice;

    /*     if(addedItem.length === 0)
    {
        console.log("IF CALLED")
        addedItem = action.medicine;
        state.addedMedicines = action.medicine; 
    }
    else {
    addedItem = [addedItem , [action.medicine]];   
} */
    //console.log("Length after added addedITEM ",addedItem.length)
    // console.log(JSON.stringify(addedItem))
    //console.log(...state.addedMedicines)
    return {
      ...state,
      addedMedicines: [...state.addedMedicines, addmed],
      medicineIds: [...state.medicineIds, jsonObj],
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + medprice,
    };
  } else if (action.type === CLEAR_CART) {
    console.log("CLEARING ALL ITEMS");
    return {
      ...state,
      addedMedicines: [],
      medicineIds: [],
      totalItems: 0,
      totalPrice: 0,
    };
  } else if (action.type === REMOVE_ITEM) {
    //console.log("called");
    //console.log(JSON.stringify(action.medicine))
    let givenMedicine = action.medicine;
    let givenMedicineId = action.medicine.medicineId;
    //console.log(givenMedicine+"\n"+givenMedicineId)

    let restItems = [];
    let newprice = 0;
    //console.log(restItems);
    //console.log(action.medicine.medicineId);
    let cartitems = state.addedMedicines;
    //console.log(cartitems);
    for (var i = 0; i < cartitems.length; i++) {
      console.log(cartitems[i].medicineId);
      if (cartitems[i].medicineId == givenMedicineId) {
        console.log("BLACK SHEEP!!!!!!!WASEEE WASEEE");
        //restItems = [...restItems]
      } else {
        console.log("VELIYA PODA");
        restItems = [...restItems, cartitems[i]];
        newprice = newprice + cartitems[i].medicinePrice;
      }
    }
    console.log(restItems);

    //let restItems = state.addedMedicines.filter(item=> givenMedicine !== item.medicine )
    //console.log(restItems);
    //console.log(JSON.stringify(restItems));
    return {
      ...state,
      addedMedicines: restItems,
      totalPrice: newprice,
      totalItems: restItems.length,
    };
  } else if (action.type === LOGIN) {
    console.log("ULLA VANDUTTEN");
    //console.log(action.user)
    console.log("Previous User", state.loggedUser);
    console.log("Previous User", state.loggedUser.lastName);
    console.log(typeof state.loggedUser.lastName);
    let userObj = action.user;
    // console.log(userObj)
    return {
      ...state,
      loggedUser: userObj,
    };
  } else if (action.type === LOGOUT) {
    console.log("LogOut");
    return {
      ...state,
      loggedUser: {},
    };
  } else {
    return {
      ...state,
      loggedUser: {
        userName: "first",
      },
    };
  }
};
export default cartReducer;
