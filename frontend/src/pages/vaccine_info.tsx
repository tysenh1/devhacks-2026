function VaccineInformation() {
    return (
        <div className="flex flex-col items-center justify-center p-6 gap-y-10">

            <h1>COVID-19 Vaccine</h1>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Important information</li>

                <li className="list-row">
                    <div>
                        <div>Eligibility</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Who should get vaccinated?</div>
                        <ul className="list bg-base-100 rounded-box shadow-md">

                            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

                            <li className="list-row">
                                <div className="list-col-grow">
                                    <div>Adults 65 years old or older</div>
                                </div>
                            </li>

                            <li className="list-row list-disc">
                                <div className="list-col-grow">
                                    <div>6 months or older, including if you are:</div>
                                    <div className="text-xs uppercase list-disc">

                                        <ul className="list-disc">
                                            <li>Residents of long-term care homes and other settings</li>
                                            <li>Individuals in high risk, including children with complex health needs</li>
                                            <li>Individuals who are pregnant</li>
                                            <li>People who provide essential community services</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <p className="list-col-wrap text-xs">

                    </p>
                </li>

                <li className="list-row">
                    <div>
                        <div>Schedule</div>
                        <div className="text-xs uppercase font-semibold opacity-60">When should I get vaccinated?</div>
                    </div>
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Age group</th>
                                    <th>Number of doses</th>
                                    <th>Recommended interval</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>6 months to less than 5 years old</th>
                                    <td>2 doses</td>
                                    <td>8 weeks apart</td>
                                </tr>

                                <tr>
                                    <th>5 to 11 years old</th>
                                    <td>1 dose</td>
                                    <td>N/A</td>
                                </tr>

                                <tr>
                                    <th>12 years old and over</th>
                                    <td>1 dose</td>
                                    <td>N/A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="list-col-wrap text-xs">
                        *Please contact your health care provider if you are immunocompromized or have any chronic conditions.
                    </p>
                </li>

                <li className="list-row">
                    <div>
                        <div>Immunization after a COVID-19 infection</div>
                        <div className="text-xs uppercase font-semibold opacity-60">I had a positive test, should I get vaccinated?</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        If you've recently had a positive COVID-19 test result, 
                        the chance of getting COVID-19 again is low in the months 
                        after infection. You can wait 3 months for your next vaccine dose. 
                        The immune response is better when there is more time between 
                        infection and vaccination.
                    </p>
                </li>

            </ul>

        </div>
    );
}

export default VaccineInformation;
