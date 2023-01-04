import { fireEvent, render, screen } from '@testing-library/react';
import { Form, FormProp, MessagesErr } from '@components/form';
import { formValidate } from '@helpers/validation-form';
import { Book } from '@interface/book';

describe('Test Form Component', () => {
  const initialBook: Book = {
    id: 0,
    title: 'Book 1',
    author: 'Author 1',
    price: 1,
    desc: 'Description',
    image: 'base_img',
  };

  const initialValue: FormProp = {
    onHandleClose: jest.fn(),
    onCreate: jest.fn(),
    onHandleEdit: jest.fn(),
  };

  const initialFormSelected: FormProp = {
    selectedBook: initialBook,
    onHandleClose: jest.fn(),
    onCreate: jest.fn(),
    onHandleEdit: jest.fn(),
  };

  test('Component Form matchers DOM Snapshot', () => {
    const component = render(<Form {...initialValue} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Form calls handleChange function when user click', () => {
    render(<Form {...initialValue} />);

    fireEvent.click(screen.getByText('Create'));
    expect(initialValue.onCreate).toBeCalled();
  });

  test('Component Form handle Input when user enter value', () => {
    render(<Form {...initialValue} />);

    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Nhan' } });
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('Nhan');
  });

  test('Component Form handle blur', () => {
    render(<Form {...initialValue} />);

    const mockBookData: Book = {
      id: 1,
      title: 'title',
      author: 'nhan',
      price: 123,
      desc: 'this is a book',
      image: 'url',
    };

    fireEvent.blur(screen.getAllByRole('textbox')[0]);
    expect(formValidate(mockBookData).isValid).toEqual(true);
    expect(formValidate(mockBookData).isValid);
    expect(screen.getAllByRole('textbox')[0]).not.toHaveFocus();
  });

  test('Component Form handle blur with error message', () => {
    render(<Form {...initialValue} />);

    const mockBookData: Book = {
      id: 1,
      title: '',
      author: 'nhan',
      price: 123,
      desc: 'this is a book',
      image: 'url',
    };

    fireEvent.blur(screen.getAllByRole('textbox')[0]);
    expect(formValidate(mockBookData).isValid).toEqual(false);
    expect(screen.getAllByRole('textbox')[0]).not.toHaveFocus();
  });

  test('Component Form has been selected matchers DOM Snapshot', () => {
    const component = render(<Form {...initialFormSelected} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Form has been selected calls handleChange function when user click', () => {
    render(<Form {...initialFormSelected} />);

    fireEvent.click(screen.getByText('Update'));
    expect(initialFormSelected.onHandleEdit).toBeCalled();
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('Book 1');
  });
});
