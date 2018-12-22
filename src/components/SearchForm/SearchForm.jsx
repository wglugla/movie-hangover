import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { Search } from 'styled-icons/fa-solid/Search';

const StyledForm = styled.form`
  padding: 2rem;
  display: flex;
`;

const StyledButton = styled.button`
  width: 20%;
  font-size: 1em;
`;

const StyledControl = styled.div`
  width: 100%;
`;

const StyledField = styled(Field)`
  border-right: none;
  color: #5f5f5f;
  text-align: center;
`;

export default reduxForm({ form: 'phraseForm' })(({ handleSubmit }) => {
  return (
    <div>
      <StyledForm onSubmit={handleSubmit} className='columns'>
        <StyledControl className='control'>
          <StyledField
            className='input'
            type='text'
            component='input'
            name='phrase'
            id='phrase'
            placeholder='Wprowadź nazwę filmu (lub jej część)'
          />
        </StyledControl>
        <StyledButton type='submit' className='button is-primary is-outlined'>
          <Search size='1em' />
        </StyledButton>
      </StyledForm>
    </div>
  );
});
