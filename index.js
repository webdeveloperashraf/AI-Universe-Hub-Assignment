// loading tools api
const loadTools = async () => {
    const url = "https://openapi.programming-hero.com/api/ai/tools";
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools);
  }
  loadTools();
  // displaying tools using card 
  const displayTools = tools => {
    // getting container div
    const toolsContainer = document.getElementById('tools-container')
    // looping through the elements and displaying all tools
    tools.forEach(tool => {
      console.log(tool);
      const toolDiv = document.createElement('div');
      toolDiv.classList.add('col');
      toolDiv.innerHTML = `
        <div class="card h-100 border-0 shadow">
          <img class="card-img-top img-fluid p-2 img-rounded h-75 mx-auto" src="${tool.image}"  alt="tool image">
          <div class="card-body">
            <h6 class="card-title fs-4">Features
            </h6>
            <ol>
                          <li>${tool.features[0] ? tool.features[0] : 'N/A'}</li>
                          <li>${tool.features[1] ? tool.features[1] : 'N/A'}</li>
                          <li>${tool.features[2] ? tool.features[2] : 'N/A'}</li>
                          <li>${tool.features[3] ? tool.features[3] : 'N/A'}</li>
                        </ol>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center px-3 py-2">
                        <div>
                         <h6 class="card-title fs-4">${tool.name}</h6>
                         <p class="card-text"><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}
                         </p>
                        </div>
                      <div>
                     <button onclick="loadToolDetails('${tool.id}')" class="btn btn-outline-danger rounded" data-bs-toggle="modal" data-bs-target="#toolDetailModal">Details</button>
                       </div>
                    </div>
                </div>
            `;
            toolsContainer.appendChild(toolDiv);
        })
    }
 
       // load details by clicking in button
       const loadToolDetails = async id => {
            const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
            const res = await fetch(url);
            const data = await res.json();
            displayToolDetails(data.data);
        }
   
       // display details in modal
       const displayToolDetails = tool => {
            console.log(tool);
            const toolDetailModal = document.getElementById('tool-detail-modal');
            toolDetailModal.innerHTML = `
                <div class="d-flex justify-content-end">
                <button type="button" class="btn-close mx-1 my-3" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row row-cols-1 row-cols-xl-2 g-4">
            <div class="col">
                <div class="card h-100 border-danger bg-danger bg-opacity-10">
                    <div class="card-body">
                        <h5 class="card-title mb-3">${tool.description}</h5>
                        <div class="d-flex justify-content-around align-items-center mb-3">
                            <div class="bg-white p-2 mx-1 rounded text-success">
                                <h6>${tool.pricing[0].price}</h6>
                                <h6>${tool.pricing[0].plan}</h6>
                            </div>
                            <div class="bg-white p-2 mx-1 rounded text-warning">
                                <h6>${tool.pricing[1].price}</h6>
                                <h6>${tool.pricing[1].plan}</h6>
                            </div>
                            <div class="bg-white p-2 mx-1 rounded text-danger">
                                <h6>${tool.pricing[2].price}</h6>
                                <h6>${tool.pricing[2].plan}</h6>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="w-50">
                                <h5>Features</h5>
                                <ul>
                                <li>${tool.features[1].feature_name ? tool.features[1].feature_name : 'N/A'}</li>
                                <li>${tool.features[2].feature_name ? tool.features[2].feature_name : 'N/A'}</li>
                                <li>${tool.features[3].feature_name ? tool.features[3].feature_name : 'N/A'}</li>
                                </ul>
                            </div>
                            <div class="w-50">
                                <h5>Integrations</h5>
                                <ul>
                                <li>${tool.integrations[0] ? tool.integrations[0] : 'N/A'}</li>
                                <li>${tool.integrations[1] ? tool.integrations[1] : 'N/A'}</li>
                                <li>${tool.integrations[2] ? tool.integrations[2] : 'N/A'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            <div class="col">
                <div class="card h-100">
                    <div><img src="${tool.image_link[0] ? tool.image_link[0] : N/A}" class="card-img-top img-fluid p-3 img-rounded" alt=""></div>
                    <div class="card-body text-center">
                        <h5>${tool.input_output_examples[0].input ? tool.input_output_examples[0].input : 'N/A'}</h5>
                        <p>${tool.input_output_examples[0].output ? tool.input_output_examples[0].output : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}



loadTools();

