const FormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#wateringhole-name').value.trim();
    const description = document.querySelector('#wateringhole-description').value.trim();
    let watering_hole_score;
    for (let i = 10; i >= 1; i--) {
        if (document.querySelector(`#star${i}`).checked) {
            watering_hole_score = document.querySelector(`#star${i}`).value.trim();
            break;
        }
    }
    

    if (name && watering_hole_score && description) {
      const response = await fetch(`/api/wateringholes`, {
        method: 'POST',
        body: JSON.stringify({ name, description, watering_hole_score }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/wateringholes');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/wateringholes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/wateringholes');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document.querySelector('#create-wateringhole-form').addEventListener('submit', FormHandler);
  
  document.querySelector('.top-water-brands').addEventListener('click', delButtonHandler);
  