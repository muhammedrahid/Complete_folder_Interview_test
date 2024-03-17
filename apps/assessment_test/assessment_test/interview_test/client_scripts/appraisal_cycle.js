frappe.ui.form.on('Appraisal Cycle', {
    onload: function(frm) {  
        frm.fields_dict['appraisees'].grid.get_field('employee').get_query = function() {
            return {
                filters: [
                    ['employment_type', '=', 'Full-time']
                ]
            };
        };
    }
})