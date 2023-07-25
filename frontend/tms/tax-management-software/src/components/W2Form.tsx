import { ErrorMessage, Form, FormGroup, Label, TextInput, Textarea } from '@trussworks/react-uswds'
import React from 'react'

const W2Form: React.FC = () => {

    // Placeholder mockSubmit function
    const mockSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("Form submitted");
        // Additional logic or API call can be added here.
    };

    return (
        <div style={{ marginLeft: '4rem' }}>
            <Form onSubmit={mockSubmit}>
                <Label htmlFor="input-type-text">Text input label</Label>
                <TextInput id="input-type-text" name="input-type-text" type="text" />

                <Label htmlFor="input-focus">Text input focused</Label>
                <TextInput
                    id="input-focus"
                    name="input-focus"
                    className="usa-focus"
                    type="text"
                />

                <FormGroup error>
                    <Label htmlFor="input-error" error>
                        Text input error
                    </Label>
                    <ErrorMessage id="input-error-message">
                        Helpful error message
                    </ErrorMessage>
                    <TextInput
                        id="input-error"
                        name="input-error"
                        type="text"
                        validationStatus="error"
                        aria-describedby="input-error-message"
                    />
                </FormGroup>

                <Label htmlFor="input-success">Text input success</Label>
                <TextInput
                    id="input-success"
                    name="input-success"
                    type="text"
                    validationStatus="success"
                />

                <Label htmlFor="input-type-textarea">Text area label</Label>
                <Textarea id="input-type-textarea" name="input-type-textarea"></Textarea>
            </Form>
        </div>
    );
}

export default W2Form