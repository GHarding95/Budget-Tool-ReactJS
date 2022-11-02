import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile, faTrash, faAngleRight, faCircleUp} from '@fortawesome/free-solid-svg-icons';
import {useForm} from 'react-hook-form';

export default function Main() { 

  // Dropdown toggle 
  
  const [toggle1, setToggle1] = useState(false);     //Your Personal Details

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  }

  const [toggle2, setToggle2] = useState(false);     //Your Household

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  }

  const [toggle3, setToggle3] = useState(false);    //Your Income

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  }

  //Hidden fields for "Is your budget sole or joint with a partner?" - Joint

  const [showHidden, setShowHidden] = useState(false);
  const [jointValue, setJointValue] = useState("");

  function getJointValue(e){
    setJointValue(e.target.value);

    if(e.target.value === "Sole"){
      setShowHidden(false);
    }
    else if(e.target.value === "Joint"){
      setShowHidden(true);
    }
  }

  // Handle form submit 

  const {register, handleSubmit, reset, formState: { errors },  } = useForm();
  const onSubmit = (data) => console.log(data);

  // Clear form

  const clearForm = () => {
    if (window.confirm("Are you sure you want to clear your budget sheet? You will lose all the information you have entered.")){
      reset();
    }
  }

  // Complete section

  const [section, setSection] = useState("");

   function completeSection() {
     if(section === ""){
       setSection("0"); //TO DO - doesn't show onSubmit in console, ie shows as blank not 0, also clear form doesn't remove the 0
     }
 }

  //Your income - Earnings

  let yourIncomeEarningsSubtotal = 0;

  //Your salary or wages (take home)

  const [salaryAmount, setSalaryAmount] = useState(null);
  const [salaryHowOften, setSalaryHowOften] = useState(null);

  function getSalaryAmount(e){
    setSalaryAmount(e.target.value) //Function is run "onChange" for the SalaryAmount input, any changes are assigned to the useState variable "salaryAmount"
  }
  
  function getSalaryHowOften(e){
    setSalaryHowOften(e.target.value)
  }

  if(salaryHowOften === "Yearly"){
    let output = salaryAmount / 12;
    yourIncomeEarningsSubtotal = Math.round((output + Number.EPSILON) * 100) / 100; //Math.round just rounds output to two decimal places
  }
  else if(salaryHowOften === "6 months"){
    let output = salaryAmount / 6;
    yourIncomeEarningsSubtotal = Math.round((output + Number.EPSILON) * 100) / 100;
  }
  else if(salaryHowOften === "3 months"){
    let output = salaryAmount / 3;
    yourIncomeEarningsSubtotal = Math.round((output + Number.EPSILON) * 100) / 100;
  }
  else if(salaryHowOften === "Monthly"){
    let output = salaryAmount / 1;
    yourIncomeEarningsSubtotal = Math.round((output + Number.EPSILON) * 100) / 100;
  }
  else if(salaryHowOften === "4 weeks"){
    let output = salaryAmount / 1;
    yourIncomeEarningsSubtotal = Math.round((output + Number.EPSILON) * 100) / 100;
  }
  else if(salaryHowOften === "2 weeks"){
    let output = salaryAmount * 2;
    yourIncomeEarningsSubtotal = Math.round((output + Number.EPSILON) * 100) / 100;
  }
  else if(salaryHowOften === "Weekly"){
    let output = salaryAmount * 4;
    yourIncomeEarningsSubtotal = Math.round((output + Number.EPSILON) * 100) / 100;
  }

    //Your partners salary or wages (take home)

    const [partnerSalaryAmount, setPartnerSalaryAmount] = useState(null);
    const [partnerSalaryHowOften, setPartnerSalaryHowOften] = useState(null);
  
    function getPartnerSalaryAmount(e){
      setPartnerSalaryAmount(e.target.value)
    }
    
    function getPartnerSalaryHowOften(e){
      setPartnerSalaryHowOften(e.target.value)
    }

    if(partnerSalaryHowOften === "Yearly"){
      let output = partnerSalaryAmount / 12;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(partnerSalaryHowOften === "6 months"){
      let output = partnerSalaryAmount / 6;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(partnerSalaryHowOften === "3 months"){
      let output = partnerSalaryAmount / 3;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(partnerSalaryHowOften === "Monthly"){
      let output = partnerSalaryAmount / 1;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(partnerSalaryHowOften === "4 weeks"){
      let output = partnerSalaryAmount / 1;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(partnerSalaryHowOften === "2 weeks"){
      let output = partnerSalaryAmount * 2;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(partnerSalaryHowOften === "Weekly"){
      let output = partnerSalaryAmount * 4;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }

    // Other

    const [otherSalaryAmount, setOtherSalaryAmount] = useState(null);
    const [otherSalaryHowOften, setOtherSalaryHowOften] = useState(null);
  
    function getOtherSalaryAmount(e){
      setOtherSalaryAmount(e.target.value)
    }
    
    function getOtherSalaryHowOften(e){
      setOtherSalaryHowOften(e.target.value)
    }

    if(otherSalaryHowOften === "Yearly"){
      let output = otherSalaryAmount / 12;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(otherSalaryHowOften === "6 months"){
      let output = otherSalaryAmount / 6;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(otherSalaryHowOften === "3 months"){
      let output = otherSalaryAmount / 3;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(otherSalaryHowOften === "Monthly"){
      let output = otherSalaryAmount / 1;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(otherSalaryHowOften === "4 weeks"){
      let output = otherSalaryAmount / 1;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(otherSalaryHowOften === "2 weeks"){
      let output = otherSalaryAmount * 2;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }
    else if(otherSalaryHowOften === "Weekly"){
      let output = otherSalaryAmount * 4;
      yourIncomeEarningsSubtotal = yourIncomeEarningsSubtotal + Math.round((output + Number.EPSILON) * 100) / 100;
    }

 

  return (
    <>    

    <div className='col-md-12'>  
     
           {/* TESTING - START */}

            {/* <div className='tc'>
              <input type='text' onChange={testButton}></input>
            </div> */}

          {/* TESTING - END */}

      {/* Welcome*/}

    <h1>Welcome to your budget</h1>
    <p>Doing a budget is a positive and important step.</p>

    <h2>Getting started</h2>
    <ul>
        <li>
          Start your budget by filling in the <span className='fw-600'>Your household</span> section below.
        </li>
        <li>
          If you have previously saved a budget, click the <span className='fw-600'>Load</span> button to see it.
        </li>
        <li>
          If you need any technical support or extra help with how to work our budget tool please email <a href="mailto: info@generic-email.org">info@generic-email.org</a>
        </li>
    </ul>

    {/* Form */}   

    <form onSubmit={handleSubmit(onSubmit)}>

          {/* Form Top Buttons */}

          <div className="ft-btns">
          <button type="button" className="ft-btn" aria-label="Load"> 
            <FontAwesomeIcon icon={faFile} aria-hidden="true"/>
            <span>Load</span>
          </button>
          <button type="button" className="ft-btn" aria-label="Clear" onClick={clearForm}> 
            <FontAwesomeIcon icon={faTrash} aria-hidden="true"/>
            <span>Clear</span>
          </button>
        </div>

      <div id='yourPersonalDetails'>
      <button type='button' className= "f-header" onClick={handleToggle1}>
        <FontAwesomeIcon icon={faAngleRight} className="arrow" aria-hidden="true"/>
        <h4>Your Personal Details</h4>
      </button>

        <div className={"content" + (toggle1 ? " activeBtn" : "" )}>
          <div className='f-subheader'>
            <p>Please fill in the following details. We do not save the information you add to Your personal details. You will need to re-enter this information each time you load the budget.</p>
            <p>If you live with a partner, only add their details here if you are dealing with your debts together.</p>
          </div>
        
          <div className='cells'>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Your full name <span className="fw-600">(required)</span></p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('a_Name', { required: true })} />
                {errors.a_Name && <span>Full name is required.</span>}
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Your date of birth</p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('b_DateOfBirth', { pattern: /^[\d\d\/\d\d\/\d\d\d\d]{0,10}$/g})} />
                {errors.b_DateOfBirth && <p>Please enter a valid date of birth (dd/mm/yyyy).</p>}
              </div>
            </div>
            
            <div className='f-row'>
              <div className='col-md-6'>
                <p>Is your budget sole or joint with a partner?</p>
              </div>
              <div className='col-md-6'>
                <select {...register('c_SoleOrJointBudget')} defaultValue="" onChange={getJointValue}>
                    <option disabled></option>
                    <option>Sole</option> 
                    <option>Joint</option>
                </select>
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>What is your employment status?</p>
              </div>
              <div className='col-md-6'>
                <select {...register('d_EmploymentStatus')} defaultValue="">
                    <option disabled></option>
                    <option>Full time</option>
                    <option>Part time</option>
                    <option>Unemployed</option>
                    <option>Not working (illness/disability)</option>
                    <option>Self employed</option>
                    <option>Retired</option>
                    <option>Carer</option>
                    <option>Student</option>
                    <option>Other</option>
                </select>
              </div>
            </div>

            <div className={'f-hidden' + (showHidden ? " f-row" : "")}>
              <div className='col-md-6'>
                <p>Your partner's full name (if applicable)</p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('e_PartnersFullName')} />
              </div>
            </div>

            <div className={'f-hidden' + (showHidden ? " f-row" : "")}>
              <div className='col-md-6'>
                <p>Your partner's date of birth (if applicable)</p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('f_PartnersDateOfBirth', { pattern: /^[\d\d\/\d\d\/\d\d\d\d]{0,10}$/g})} />
                {errors.f_partnersDateOfBirth && <p>Please enter a valid date of birth (dd/mm/yyyy).</p>}
              </div>
            </div>

            <div className={'f-hidden' + (showHidden ? " f-row" : "")}>
              <div className='col-md-6'>
              <p>Your partner's employment (if applicable)</p>
              </div>
              <div className='col-md-6'>
                <select {...register('g_PartnersEmploymentStatus')} defaultValue="">
                    <option disabled></option>
                    <option>Full time</option>
                    <option>Part time</option>
                    <option>Unemployed</option>
                    <option>Not working (illness/disability)</option>
                    <option>Self employed</option>
                    <option>Retired</option>
                    <option>Carer</option>
                    <option>Student</option>
                    <option>Other</option>
                </select>
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>What type of accommodation do you live in?</p>
              </div>
              <div className='col-md-6'>
                <select {...register('h_TypeOfAccommodation')} defaultValue="">
                    <option disabled></option>
                    <option>Owner</option>
                    <option>Shared ownership</option>
                    <option>Mortgage</option>
                    <option>Living with parents</option>
                    <option>Self employed</option>
                    <option>Tenant - private</option>
                    <option>Tenant - social</option>
                    <option>Other</option>
                </select>
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Your address line 1 <span className="fw-600">(required)</span></p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('i_AddressLine1', { required: true })} />
                {errors.i_AddressLine1 && <span>Address Line 1 is required.</span>}
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Your address line 2 <span className="fw-600">(required)</span></p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('j_AddressLine2', { required: true })} />
                {errors.j_AddressLine2 && <span>Address Line 2 is required.</span>}
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Your address line 3 </p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('k_AddressLine3')} />
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Postcode <span className="fw-600">(required)</span></p>
              </div>
              <div className='col-md-6'>
                <input type={"text"} {...register('l_Postcode', { required: true })} />
                {errors.l_Postcode && <span>Postcode is required.</span>}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id='yourHousehold'>
      <button type='button' className= "f-header" onClick={handleToggle2}>
        <FontAwesomeIcon icon={faAngleRight} className="arrow" aria-hidden="true"/>
        <h4>Your Household</h4>
      </button>

        <div className={"content" + (toggle2 ? " activeBtn" : "" )}>
          <div className='cells'>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Do you have a partner who lives with you?</p>
              </div>
              <div className='col-md-6'>
                <select {...register('m_PartnerWhoLivesWithYou')} defaultValue="">
                    <option disabled></option>
                    <option>No</option>
                    <option>Yes</option>
                </select>
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Number of dependent children under 16</p>
              </div>
              <div className='col-md-6'>
                <input type={"number"} min={"0"} {...register('n_NumberOfDependentChildrenUnder16')} defaultValue={section} />
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Number of dependent children aged 16 - 18</p>
              </div>
              <div className='col-md-6'>
                <input type={"number"} min={"0"} {...register('o_NumberOfDependentChildren16-18')} defaultValue={section} />
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Other dependents</p>
              </div>
              <div className='col-md-6'>
                <input type={"number"} min={"0"} {...register('p_OtherDependents')} defaultValue={section} />
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Non Dependents</p>
              </div>
              <div className='col-md-6'>
                <input type={"number"} min={"0"} {...register('q_NonDependents')} defaultValue={section} />
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Number in household</p>
              </div>
              <div className='col-md-6'>
                <input type={"number"} min={"0"} {...register('r_NumberInHousehold')} defaultValue={section} />
              </div>
            </div>

            <div className='f-row'>
              <div className='col-md-6'>
                <p>Number of vehicles in household</p>
              </div>
              <div className='col-md-6'>
                <input type={"number"} min={"0"} {...register('s_NumberOfVehiclesInHousehold')} defaultValue={section} />
              </div>
            </div>

            <div className='f-row nb'>
              <div className='col-md-6'>
                <button type="button" className="section-btn" onClick={completeSection}>Complete section</button> {/* TO DO - Add onclick to auto fill with 0 */}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id='yourIncome'>
      <button type='button' className= "f-header" onClick={handleToggle3}>
        <FontAwesomeIcon icon={faAngleRight} className="arrow" aria-hidden="true"/>
        <h4>Your Income</h4>
      </button>

        <div className={"content" + (toggle3 ? " activeBtn" : "" )}>
          <div className='cells'>

          <div className='f-subheader'>
            <h5>Earnings</h5>
            <p>Include all types of income coming into your household.</p>
            <p>Remember to include any dividends you receive from the limited company after deductions for tax.</p>
            <p>If you live with your partner and you are not dealing with your debts together, contact us for advice about completing this section.</p>
          </div>

          <div className='f-row fr2'>
            <div className='col-md-6'>
              <p>Your salary or wages (take home)</p>
            </div>
            <div className='col-md-3 px-3'>
              <h5>Amount (£)</h5>
              <input type={"number"} min={"0"} {...register('t_YourIncomeSalary')} placeholder={"Amount"} onChange={getSalaryAmount}/>
            </div>
            <div className='col-md-3 px-3'>
              <h5>How often?</h5>
            <select {...register('u_YourIncomeSalaryHowOften')} defaultValue="" onChange={getSalaryHowOften}>
                    <option disabled></option>
                    <option>Yearly</option>
                    <option>6 months</option>
                    <option>3 months</option>
                    <option>Monthly</option>
                    <option>4 weeks</option>
                    <option>2 weeks</option>
                    <option>Weekly</option>
                </select>
            </div>
          </div>

          <div className='f-row fr2'>
            <div className='col-md-6'>
              <p>Your partner's salary or wages (take home)</p>
            </div>
            <div className='col-md-3 px-3'>             
              <input type={"number"} min={"0"} {...register('v_YourIncomePartnerSalaryTakeHome')} placeholder={"Amount"} onChange={getPartnerSalaryAmount}/>
            </div>
            <div className='col-md-3 px-3'>            
            <select {...register('w_YourIncomePartnerSalaryHowOften')} defaultValue="" onChange={getPartnerSalaryHowOften}>
                    <option disabled></option>
                    <option>Yearly</option>
                    <option>6 months</option>
                    <option>3 months</option>
                    <option>Monthly</option>
                    <option>4 weeks</option>
                    <option>2 weeks</option>
                    <option>Weekly</option>
                </select>
            </div>
          </div>

          <div className='f-row fr2'>
            <div className='col-md-6'>
              <p>Other</p>
            </div>
            <div className='col-md-3 px-3'>             
              <input type={"number"} min={"0"} {...register('x_YourIncomeOther')} placeholder={"Amount"} onChange={getOtherSalaryAmount} />
            </div>
            <div className='col-md-3 px-3'>            
            <select {...register('y_YourIncomeOtherHowOften')} defaultValue="" onChange={getOtherSalaryHowOften}>
                    <option disabled></option>
                    <option>Yearly</option>
                    <option>6 months</option>
                    <option>3 months</option>
                    <option>Monthly</option>
                    <option>4 weeks</option>
                    <option>2 weeks</option>
                    <option>Weekly</option>
                </select>
            </div>
          </div>

          <div className='f-row f-total py-3'>
            <h5 {...register('z_TotalSalaryPerMonth')}>Total salary or wages per month: £{yourIncomeEarningsSubtotal}</h5>
          </div>


          </div>
        </div>
      </div>

      <div className='m-flex'>
        <div className='fb-left'>
          <a href='#'>Top of page</a>
          <FontAwesomeIcon icon={faCircleUp} className="arrow-up" />
        </div>
        <div className='fb-right'>
          <input className='fb-btn' aria-label="Submit" type="submit" value="Submit" />
        </div>
      </div>

      <div className='container tc col-md-12'>
        <a className='s-link' href="#" target="_blank">Please click here to let us know what you think of our budget tool.</a>
      </div>

    </form>
  
    
    </div>
  


    </>
  )
}
