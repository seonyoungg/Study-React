import { Fragment } from 'react';

interface AddressBook {
  id: number;
  name: string;
  value: string;
}

interface EditAddressProps {
  addressBook: AddressBook[];
  handleAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function EditAddress({ addressBook, handleAddressChange }: EditAddressProps) {
  const lists = addressBook.map((address) => {
    return (
      <Fragment key={address.id}>
        <label htmlFor={address.id.toString()}>{address.name}</label>
        <input id={address.id.toString()} type='text' name={address.id.toString()} value={address.value} onChange={handleAddressChange} />
        {/* value가 추가되는 것 => 제어 Components */}
        <br />
      </Fragment>
    );
  });
  return lists;
}

export default EditAddress;
