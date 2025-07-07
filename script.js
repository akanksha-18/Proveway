let selectedOption = 1;
        let selectedColors = {};

        document.addEventListener('DOMContentLoaded', function() {
            updateSelection();
        });

       
        document.querySelectorAll('.pricing-option').forEach(option => {
            option.addEventListener('click', function(e) {
               
                if (e.target.tagName === 'SELECT' || e.target.classList.contains('color-option')) {
                    return;
                }

                const optionNum = parseInt(this.dataset.option);
                selectedOption = optionNum;
                updateSelection();
                toggleExpansion(this);
            });
        });

    
        document.querySelectorAll('.color-option').forEach(colorOption => {
            colorOption.addEventListener('click', function(e) {
                e.stopPropagation();
                
               
                this.parentElement.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
              
                this.classList.add('selected');
                
             
                const row = this.closest('.customization-row');
                const label = row.querySelector('.customization-label').textContent;
                selectedColors[label] = this.dataset.color;
            });
        });

      
        document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
            const selectedOptionData = getSelectedOptionData();
            alert(`Added to cart!\nOption: ${selectedOptionData.unit}\nPrice: ${selectedOptionData.price}`);
        });

        function updateSelection() {
            
            document.querySelectorAll('.radio-btn').forEach((btn, index) => {
                btn.classList.toggle('selected', index + 1 === selectedOption);
            });

          
            const prices = ['$10.00', '$18.00', '$24.00'];
            document.querySelector('.total-price').textContent = `Total: ${prices[selectedOption - 1]} USD`;
        }

        function toggleExpansion(clickedOption) {
            const details = clickedOption.querySelector('.option-details');
            
           
            document.querySelectorAll('.option-details').forEach(detail => {
                if (detail !== details) {
                    detail.classList.remove('expanded');
                }
            });

         
            if (details) {
                details.classList.toggle('expanded');
            }
        }

        function getSelectedOptionData() {
            const options = [
                { unit: '1 Unit', price: '$10.00 USD' },
                { unit: '2 Unit', price: '$18.00 USD' },
                { unit: '3 Unit', price: '$24.00 USD' }
            ];
            
            return options[selectedOption - 1];
        }

       
        document.querySelectorAll('select').forEach(select => {
            select.addEventListener('change', function(e) {
                e.stopPropagation();
                console.log('Size/Color changed:', this.value);
            });
        });