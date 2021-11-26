import { useMutation } from "react-query";
import { useUser } from "../../contexts/auth";
import { API } from "../../utils";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

const FlightPlans: React.FC<any> = () => {
    const user = useUser();
    const getFlightPlans = useMutation<AxiosResponse<any, any>, any, any>(
        updaterId => API.post('/flightChain/find',
            {
                "selector": {
                    "updaterId": `${updaterId.toUpperCase()}`
                }
            },
            {
                headers: {
                    Authorization: 'Bearer ' + user.jwt
                }
            })
    );

    useEffect(() => {
        getFlightPlans.mutate(user.username);
    }, [])

    if (getFlightPlans.data !== undefined) {
        console.log(getFlightPlans.data.data)
    }

    return (
        <div>
            {getFlightPlans.isLoading ? (
                'retrieving flight plans'
            ) : (
                <>
                    {getFlightPlans.isError ? (
                        `An error occurred: ${getFlightPlans.error.message}`
                    ) : null}
                    {getFlightPlans.isSuccess ? (
                        `Flight Plan submitted:\n ${JSON.stringify(getFlightPlans.data.data)}`
                    ) : null}
                </>
            )}
        </div>
    )
}

export default FlightPlans