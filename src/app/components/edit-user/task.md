## Main tasks:

open `edit-user.component` and define a form with the following fields:
- `firstName` (required)
- `lastName` (required)
- `age` (optional)

1. Define a `ReactiveForm` with these fields
2. Define the view in `html` file to display the form. Try using angular material components
3. Add a button to submit the form values with an `@Output` named `userEdited`
4. Display the user details values inside `app.component.html` 




## Follow-up tasks:
1. center the form in the view
2. rework the form so it emits the `@Output` every time user makes a change in the form
3. make it so the emitting doesn't happen more than once every 500ms
4. make it so at least one form element uses a `mat-label`
