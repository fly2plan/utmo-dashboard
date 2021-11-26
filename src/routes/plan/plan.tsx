import validate from '../../acris-schema/validate';
import { FlightPlan } from '../../components';
import './plan.css';

const Plan: React.FC<any> = () => {
    return (
        <div className="flight-plan" >
            <FlightPlan validate={validate} />
        </div>
        
    )
}

export default Plan