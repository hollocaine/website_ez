const dropdownListMenu = (pos) => {
    let dropList = {};
    switch (pos) {
        case 1:
            dropList = {
                lists: [
                    { id: 1345, name: 'Online Training', href: '/courses/'},
                    { id: 5529, name: 'Instructor-Led Training', href: '/instructor-led-training/'},
                    { id: 1349, name: 'Blended Learning', href: '/blended-learning/'}, 
                    { id: 1354, name: 'Mulilingual Training', href: '/multilingual-online-training/'},  
                    { id: 1353, name: 'Course Development', href: '/course-development/'}, 
                    { id: 5949, name: 'LMS', href: '/learning-management-system/'}         
                ]
            }
            break;
        case 2:
            dropList = {
                    lists: [
                    ]
                }
            break;
        case 3:
            dropList= {
                    lists: [
                        { id: 5522, name: 'Employee Induction', href: '/online-employee-induction/'},
                        { id: 5521, name: 'Contractor Induction', href: '/online-contractor-induction/'}  
                    ]
                }
            break;
        case 4:
            dropList = {
                    lists: [
                        { id: 5522, name: 'Food & Drink', href: '/ehs-compliance-food-drink-manufacturing/'},
                        { id: 5523, name: 'Retail', href: '/ehs-compliance-software-retail/'},
                        { id: 5524, name: 'Pharmaceutical', href: '/ehs-compliance-software-pharmaceutical/'},
                        { id: 5525, name: 'Transport & Logistics', href: '/ehs-compliance-software-transport-logistics-industry/'},
                        { id: 5526, name: 'Manufacturing', href: '/ehs-compliance-software-manufacturing-industry/'}, 
                        { id: 5527, name: 'Energy & Utilities', href: '/ehs-compliance-software-energy-utilities-industry/'},  
                    ]
                }
            break;
        case 5:
            dropList = {
                    lists: [
                        { id: 5528, name: 'About EazySafe', href: '/ehs-compliance-food-drink-manufacturing/'},
                        { id: 5529, name: 'EHS & Wellness Experts', href: '/ehs-compliance-software-retail/'},
                        { id: 5530, name: 'Clients', href: '/ehs-compliance-software-pharmaceutical/'},
                        { id: 5531, name: 'Testamonials', href: '/ehs-compliance-software-transport-logistics-industry/'},
                        { id: 5532, name: 'Resources', href: '/ehs-compliance-software-manufacturing-industry/'},    
                    ]
                }
            break;
        case 6:
            dropList = {
                    lists: [
                        { id: 5533, name: 'Contact Details', href: '/ehs-compliance-food-drink-manufacturing/'},
                        { id: 5534, name: 'Support', href: '/ehs-compliance-software-retail/'},
                        { id: 5535, name: 'Get a 7 Day Trail', href: '/ehs-compliance-software-pharmaceutical/'},
                    ]
                }
            break;
        default:
            dropList = {
                    lists: [
                    ]
                }
            break;
    }
    return dropList;
}
export default dropdownListMenu;