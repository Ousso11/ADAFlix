// btn.js

let pos_neg_index = 0; // Index to track the current plot

function pos_neg_switch() {
  // Get the plot container
  const plotContainer = document.getElementById('pos_neg_container');

  // Remove existing plot
  plotContainer.innerHTML = '';

  // Your pre-generated Plotly Express plots
  const plotFiles = [
    'assets/plots/neg_revenue_px.html',
    'assets/plots/pos_revenue_px.html',
    // Add more plot files as needed
  ];

  const iframe = document.createElement('iframe');

  // Set the src attribute
  iframe.src = plotFiles[pos_neg_index];

  // Set the width attribute
  iframe.width = '100%';

  // Set the height attribute
  iframe.height = '500px';

  // Set the style attribute (border: none;)
  iframe.style.border = 'none';

  // Append the iframe to the plot container
  plotContainer.appendChild(iframe);

  // Update the button text
  const button = document.getElementById('pos_neg_Button');
  button.textContent = pos_neg_index === 0 ? 'Show Positive Plot' : 'Show Negative Plot';

  // Update the index for the next toggle
  pos_neg_index = (pos_neg_index + 1) % plotFiles.length;
}

// Initial plot
pos_neg_switch();
