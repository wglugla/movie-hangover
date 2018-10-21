import * as React from "react";
import { Field, reduxForm } from "redux-form";
export default reduxForm({ form: "phraseForm" })(({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          type="text"
          component="input"
          name="phrase"
          id="phrase"
          placeholder="Type your movie title"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
});