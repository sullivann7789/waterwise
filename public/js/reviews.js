const FormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#review-name').value.trim();
    const description = document.querySelector('#review-description').value.trim();
    const watering_hole_id = document.querySelector('#watering-hole-id').value.trim();
    let review_score;
    for (let i = 10; i >= 1; i--) {
        if (document.querySelector(`#star${i}`).checked) {
            review_score = document.querySelector(`#star${i}`).value.trim();
            break;
        }
    }

    if (name && review_score && description) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ name, description, review_score, watering_hole_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/wateringholes/${watering_hole_id}`);
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        const watering_hole_id = document.querySelector('#watering-hole-id').value.trim();
        document.location.replace(`/wateringholes/${watering_hole_id}`);
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document.querySelector('#create-wateringhole-form').addEventListener('submit', FormHandler);
  
  document.querySelector('.review-list').addEventListener('click', delButtonHandler);
  