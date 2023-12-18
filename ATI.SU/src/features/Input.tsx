import { AddButton } from '../components/UI/buttons/AddButton';
import { RemoveButton } from '../components/UI/buttons/RemoveButton';
import { MyInput } from '../components/UI/inputs/MyInput';
import { MySelect } from '../components/UI/inputs/MySelect';

import classes from '../components/UI/inputs/MySelect.module.css';

function Input({
  remove,
  index,
  setInputData,
  setSelectData,
  inputValue,
  selectValue,
  lastElementIndex,
  addInput,
}: {
  remove: (index: number) => void;
  index: number;
  setInputData: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectData: (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  inputValue: string;
  selectValue: string;
  lastElementIndex: number;
  addInput: () => void;
}): JSX.Element {
  return (
    <div>
      <form>
        <MySelect
          className={classes.mySelect}
          value={selectValue}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectData(index, e)
          }
          name="list"
          id="1"
        ></MySelect>

        <MyInput
          type={selectValue === 'phone' ? 'tel' : 'text'}
          placeholder="add"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputData(index, e)
          }
        />
        {index === lastElementIndex && (
          <AddButton type="button" onClick={addInput}>
            +
          </AddButton>
        )}
        <RemoveButton type="button" onClick={() => remove(index)}>
          -
        </RemoveButton>
      </form>
    </div>
  );
}

export default Input;
