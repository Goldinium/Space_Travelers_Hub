import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addRocketskByThunk } from '../redux/rockets/rocketsSlice';

export default function NewBookForm() {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });

  const [addBookStatus, setAddBookStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue, [name]: value,
    }));
  };

  const canSubmit = [formData.title, formData.author].every(Boolean) && addBookStatus === 'idle';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      try {
        setAddBookStatus('pending');
        // dispatch(addBookByThunk(formData)).unwrap();
        setFormData({
          title: '',
          author: '',
        });
      } catch (err) {
        err.message('Submission Failed', err);
      } finally {
        setAddBookStatus('idle');
      }
    }
  };

  return (
    <div className="form-container">
      <h2 className="newbookform-title">Add New Book</h2>
      <form id="newbookform" className="newbookform" onSubmit={handleSubmit}>
        <input name="title" value={formData.title} className="booktitle" required type="text" placeholder="Book title" onChange={handleChange} />
        <input name="author" value={formData.author} className="bookauthor" required type="text" placeholder="Author" onChange={handleChange} />
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </form>
    </div>
  );
}
