import React from "react";
import { connect } from "react-redux";
function Products(res){
    console.log(res)
}
export default connect(function(store){return store})(Products)