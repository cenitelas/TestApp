 import {connect} from "react-redux";
 import {getPhotos} from '../actions/action';
 import Main from "./Main";

 const mapDispatchToProps = (dispatch) => ({
    getPhotos: () => dispatch(getPhotos())
  })
  
   const mapStateToProps = state => {
     return {photos: state.photos};
   }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Main);