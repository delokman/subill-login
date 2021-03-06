import React from 'react';
import ServiceRequestForm from "./forms/request-form.js"
import {Fetcher} from "servicebot-base-form"
import {Price, getPrice} from "./utilities/price.js";
import {connect} from 'react-redux';
import {formValueSelector, getFormValues} from 'redux-form'
const REQUEST_FORM_NAME = "serviceInstanceRequestForm";
const selector = formValueSelector(REQUEST_FORM_NAME); // <-- same as form name
import {getPriceData} from "./core-input-types/client";

class ServiceLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.templateId,
            error: null
        };
    }

    componentDidMount() {
    }

    render() {
            let {formJSON, paymentStructureTemplateId } = this.props;

            return (
                <div className="servicebot--embeddable servicebot--rf-embeddable servicebot--request-user-form-wrapper custom">
                    {/*{JSON.stringify(this.getPriceData())}*/}
                    <div className={`rf--form-wrapper`}>
                        <div className={`rf--form`}>
                            <div className="rf--form-content">
                                <div className="rf--basic-info">
                                </div>
                                <ServiceRequestForm {...this.props} />
                            </div>
                        </div>
                    </div>
                    <div className="servicebot-logo-footer">
                        <span className="_text">Login generated by Subill <img src=''/></span>
                    </div>
                </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        options: {},
        formJSON: getFormValues(REQUEST_FORM_NAME)(state)
    }
}
/*let mapDispatchToProps = function(dispatch){
    return {
        setLoading : function(is_loading){
            dispatch({type: "SET_LOADING", is_loading});
        }
    }
}*/


//ServiceLogin = connect(mapStateToProps)(ServiceLogin);
let Wrapper = function (props) {

    return (<Provider store={store}>
    </Provider>)
};

export default ServiceLogin;