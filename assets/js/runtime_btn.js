
let runtime_index = 0; 
function runtime_switch() {
    // Get the plot container
    const plotContainer = document.getElementById('runtime_container');
  
    // Remove existing plot
    plotContainer.innerHTML = '';
  
    // Your pre-generated Plotly Express plots
    const plotFiles = [
        "assets/plots/runtime_mean_revenue.html",
        "assets/plots/runtime_box_revenue.html",
      // Add more plot files as needed
    ];
  
    const iframe = document.createElement('iframe');
  
    // Set the src attribute
    iframe.src = plotFiles[runtime_index];
  
    // Set the width attribute
    iframe.width = '100%';
  
    // Set the height attribute
    iframe.height = '500px';
  
    // Set the style attribute (border: none;)
    iframe.style.border = 'none';
  
    // Append the iframe to the plot container
    plotContainer.appendChild(iframe);
  
    // Update the button text
    const button = document.getElementById('runtime_Button');
    button.textContent = runtime_index === 0 ? 'Show BOX Plot' : 'Show BAR Plot';
  
    // Update the index for the next toggle
    runtime_index = (runtime_index + 1) % plotFiles.length;
  }

runtime_switch();
