import { Dropdown, Fieldset, Form, Label, TextInput } from '@trussworks/react-uswds'
import React from 'react'
import PaddingComponent from './PaddingComponent';
import { useNavigate } from 'react-router-dom';




const NameForm: React.FC = () => {


  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the button click and navigate to a new page
  const handleButtonClick = () => {
    // Use the navigate function to go to the desired route
    navigate('/W2Form');
  };


  // Placeholder mockSubmit function
  const mockSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("Form submitted");
    // Additional logic or API call can be added here.
  };



  return (
    <div>
      <Form onSubmit={mockSubmit}>
        <Fieldset legend="Name" legendStyle="large">
          <Label htmlFor="title" hint=" (optional)">
            Title
          </Label>
          <TextInput id="title" name="title" type="text" inputSize="small" />
          <Label htmlFor="first-name">First name</Label>
          <TextInput id="first-name" name="first-name" type="text" />
          <Label htmlFor="middle-name" hint=" (optional)">
            Middle name
          </Label>
          <TextInput id="middle-name" name="middle-name" type="text" />
          <Label htmlFor="last-name">Last name</Label>
          <TextInput id="last-name" name="last-name" type="text" />
        </Fieldset>


        {/** MAILING ADDRESS FORM */}
        <PaddingComponent padding={20} />
        <Fieldset legend="Mailing address" legendStyle="large">
          <Label htmlFor="mailing-address-1">Street address 1</Label>
          <TextInput id="mailing-address-1" name="mailing-address-1" type="text" />

          <Label htmlFor="mailing-address-2" hint=" (optional)">
            Street address 2
          </Label>
          <TextInput id="mailing-address-2" name="mailing-address-2" type="text" />

          <div className="grid-row grid-gap">
            <div className="mobile-lg:grid-col-8">
              <Label htmlFor="city">City</Label>
              <TextInput id="city" name="city" type="text" />
            </div>
            <div className="mobile-lg:grid-col-4">
              <Label htmlFor="state">State</Label>
              <Dropdown id="state" name="state">
                <option>- Select -</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value="AA">AA - Armed Forces Americas</option>
                <option value="AE">AE - Armed Forces Africa</option>
                <option value="AE">AE - Armed Forces Canada</option>
                <option value="AE">AE - Armed Forces Europe</option>
                <option value="AE">AE - Armed Forces Middle East</option>
                <option value="AP">AP - Armed Forces Pacific</option>
              </Dropdown>
            </div>
          </div>

          <Label htmlFor="zip">ZIP</Label>
          <TextInput
            id="zip"
            name="zip"
            type="text"
            inputSize="medium"
            pattern="[\d]{5}(-[\d]{4})?"
          />
        </Fieldset>

      </Form>

      <button onClick={handleButtonClick}>Go to New Page</button>
    </div>
  )
}

export default NameForm