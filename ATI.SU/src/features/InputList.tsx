import React, { useState } from 'react';
import { GetButton } from '../components/UI/buttons/GetButton';
import Input from './Input';

function InputList(): JSX.Element {
  const [forms, setForms] = useState<
    { id: number; type: string; value: string }[]
  >([{ id: 0, type: 'email', value: '' }]);
  const [lastElementIndex, setLastElementIndex] = useState<number>(0);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [allErrorsFixed, setAllErrorsFixed] = useState<boolean>(false);

  const remove = (ind: number) => {
    const updatedForms = forms.filter((el, index) => index !== ind);
    setForms(updatedForms);
    if (updatedForms.length > 0) {
      setLastElementIndex(updatedForms[updatedForms.length - 1].id);
    } else {
      setLastElementIndex(0);
    }
  };

  const addInput = () => {
    setForms((prevForms) => [
      ...prevForms,
      { id: lastElementIndex + 1, type: 'email', value: '' },
    ]);
    setLastElementIndex(lastElementIndex + 1);
  };

  const setInputData = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === index ? { ...form, value: e.target.value } : form
      )
    );
  };

  const setSelectData = (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === index ? { ...form, type: e.target.value } : form
      )
    );
  };

  const getData = () => {
    const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone: string) => {
      const re = /^\d{10}$/;
      return re.test(phone);
    };

    const validateURL = (url: string) => {
      const re = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,}(\.[a-z]{2,})?$/;
      return re.test(url);
    };
    const errors: string[] = [];

    forms.forEach((form) => {
      if (form.type === 'email' && !validateEmail(form.value)) {
        errors.push(`Invalid email: ${form.value}`);
      } else if (form.type === 'phone' && !validatePhone(form.value)) {
        errors.push(`Invalid phone number: ${form.value}`);
      } else if (form.type === 'url' && !validateURL(form.value)) {
        errors.push(`Invalid URL: ${form.value}`);
      }
    });

    if (errors.length >= 1) {
      setErrorMessages(errors);
      setAllErrorsFixed(false);
      console.log(errors);
    } else {
      let result: { type: string[]; value: string[] } = { type: [], value: [] };
      forms.forEach((form) => {
        if (form) {
          result = {
            ...result,
            type: [...result.type, form.type],
            value: [...result.value, form.value],
          };
        }
      });
      console.log(result);

      setErrorMessages([]);
      setAllErrorsFixed(true);
    }
  };
  return (
    <>
      <div>
        {forms.map((form) => (
          <Input
            key={form.id}
            index={form.id}
            remove={remove}
            setInputData={setInputData}
            setSelectData={setSelectData}
            inputValue={form.value}
            selectValue={form.type}
            lastElementIndex={lastElementIndex}
            addInput={addInput}
          />
        ))}
      </div>
      <div>
        <GetButton onClick={getData}>Get data</GetButton>
      </div>
      <div>
        {!allErrorsFixed && (
          <div>
            {errorMessages.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default InputList;
