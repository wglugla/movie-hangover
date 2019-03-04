import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Search } from 'styled-icons/fa-solid/Search';

export default reduxForm({ form: 'phraseForm' })(({ handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit} className='searchForm'>
				<div className='field'>
					<label htmlFor="phrase" className='label is-size-3'>
						Wyszukaj tytuł
					</label>
					<p className='control formCase'>
						<Field
							className='input is-normal'
							type='text'
							component='input'
							name='phrase'
							id='phrase'
							placeholder='Wprowadź nazwę filmu'
						/>
						<button type='submit' className='button is-dark'>
							<Search  size='1em' />
						</button>
					</p>
				</div>
			</form>
		</div>
	);
});
