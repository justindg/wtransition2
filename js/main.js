$('input.pw').on('input',function(e){
  if ($('.pw').val() === 'Caramello') {
    $('.all').show();
    $('.password').hide();
  }
});

$('.faq-button').on('click', function() {
  // $('.modal-faq').fadeIn(200);
  var modal = document.getElementById('faq');
  modal.style.display = "block";
});

$('.faq-q').on('click', function() {
  $('.faq-a').hide();
  var thisA = $(this).parent().find('.faq-a');
  if (thisA.is(':hidden')) {
    thisA.show();
  } else {
    thisA.hide();
  }
});

$('.acc').on('click', function() {
  var chevron = $(this).find('.chevron');
  var content =$(this).find('.acc-content');
  if (content.is(':hidden')) {
    chevron.attr("src","img/chevron_down.svg");
    content.slideDown(200);
  } else {
    chevron.attr("src","img/chevron_right.svg");
    content.slideUp(200);
  }
});

window.onclick = function(event) {
  var faq = document.getElementById('faq');
  var generic = document.getElementById('generic');
    if (event.target == faq) {
      faq.style.display = "none";
    } else if (event.target == generic) {
      generic.style.display = "none";
    }
}

$('.icon_close').on('click', function() {
  var modal = document.getElementById('faq')
  var generic = document.getElementById('generic');;
  modal.style.display = "none";
  generic.style.display = "none";
});

var banner = {
  generic: {
    back: false,
    banner_title1: "Technical Pathways",
    banner_title2: "As we continue to evolve from a bank to a digitally enabled organisation, deep technical skills are critical to our success and so we have designed an alternative path where employees are recognised and rewarded for technical leadership, providing them with a clear path for advancement, alongside the traditional people leadership career pathway."
  },
  engineering: {
    back: true,
    banner_title1: "Engineering",
    banner_title2: ""
  }
}

var engineering = {
  generic: {
    active: true,
    title: "Technical Pathway Framework",
    description: "The technical pathway is a framework to help support career progression and recognition for both people leaders and more technically focussed individuals. It is not prescriptive but can help you understand how your current skills or role align to other roles within the framework and what you may need to develop to progress or change role.",
    role_tech_1: "Executive Consultant",
    role_tech_2: "Principal Consultant",
    role_tech_3: "Specialist Consultant",
    role_manager_1: "Executive Manager",
    role_manager_2: "Senior Manager",
    role_manager_3: "Manager",
    role_1: "Senior Consultant",
    role_2: "Consultant",
    role_3: "Graduate"
  },
  devops: {
    active: false,
    title: "DevOps Engineering",
    description: "These roles work with development and operations communities to drive velocity and quality of software delivered. DevOps engineers are technical, collaborative, communicative, and enjoy finding efficiencies and therefore are always looking to automate and monitor the process of software integration, testing, deployment, and infrastructure changes.",
    role_tech_1: "Executive Consultant",
    role_tech_2: "Principal Engineer",
    role_tech_3: "Specialist / Domain Engineer",
    role_manager_1: "Executive Manager, Continuous Delivery",
    role_manager_2: "Continuous Delivery Manager",
    role_manager_3: "Technical Delivery Lead",
    role_1: "Senior Engineer",
    role_2: "Engineer",
    role_3: "Graduate / Associate Engineer"
  },
  infra: {
    active: false,
    title: "Infrastructure Engineering",
    description: "These roles collaborate closely with the business to create fit-for-purpose IT infrastructure services that supports the business in its goals. Infrastructure engineers are customer focussed, logical and rational. They apply broad breadth and depth of knowledge to understand requirements, translate metrics into meaningful insights and cohesively integrate IT services. They have specialised knowledge across various technology domains including enterprise data centres, networking, compute hosting, databases, storage, cloud-based services and software defined environments.",
    role_tech_1: "Executive Engineer",
    role_tech_2: "Principal Engineer",
    role_tech_3: "Specialist Engineer",
    role_manager_1: "Executive Manager, Engineering",
    role_manager_2: "Senior Manager, Engineering",
    role_manager_3: "Manager, Engineering",
    role_1: "Senior Engineer",
    role_2: "Engineer",
    role_3: "Graduate / Associate Engineer"
  },
  software: {
    active: false,
    title: "Software Engineering",
    description: "The software engineering roles focus on the delivery of outstanding customer experiences through innovative, well designed and engineered solutions. Software Engineers care deeply and become experts in the full lifecycle of software development. They develop extensive skills and experience not only in languages and frameworks, but also in the underlying and supporting disciplines to design, build, deploy and maintain high-quality, resilient software that is critical to the success of CBA and expected by our customers.",
    role_tech_1: "Chief Engineer",
    role_tech_2: "Principal Engineer",
    role_tech_3: "Specialist Software Engineer",
    role_manager_1: "Executive Manager, Engineering",
    role_manager_2: "Technical Manager",
    role_manager_3: "Lead Software Engineer",
    role_1: "Senior Software Engineer",
    role_2: "Software Engineer",
    role_3: "Graduate / Associate Software Engineer"
  },
  systems: {
    active: false,
    title: "Systems Engineering",
    description: "Lorem ipsum dolor sit amet",
    role_tech_1: "Systems T1",
    role_tech_2: "Systems T2",
    role_tech_3: "Systems T3",
    role_manager_1: "Systems M1",
    role_manager_2: "Systems M2",
    role_manager_3: "Systems M3",
    role_1: "Senior Engineer",
    role_2: "Engineer",
    role_3: "Graduate / Associate Engineer"
  }
}



$('.banner_back').on('click', function() {
  $('#home').show();
  $('#impacted').hide();
  $('#leaders').hide();

  $('.acc-content').hide();
});

$('.pathway').on('click', function() {
  $('html, body').animate({ scrollTop: 0 }, 500);
  $("#s4-workspace").animate({ scrollTop: 0 }, 500);

  if ($(this).hasClass('pathway_leaders')) {
    $('#home').hide();
    $('#leaders').show();
  } else if ($(this).hasClass('pathway_impacted')) {
    $('#home').hide();
    $('#impacted').show();
  }
});

var path = window.location.pathname;

var devopsPdf = {
  role_tech_1: path + "/Documents/DO Executive Consultant.pdf",
  role_tech_2: path + "/Documents/DO Principal Engineer.pdf",
  role_tech_3: path + "/Documents/DO Domain Engineer.pdf",
  role_manager_1: path + "/Documents/IS EM Engineering.pdf",
  role_manager_2: path + "/Documents/DO Continuous Delivery Manager.pdf",
  role_manager_3: path + "/Documents/DO Technical Delivery Lead.pdf",
  role_1: path + "/Documents/DO Senior Engineer.pdf",
  role_2: path + "/Documents/DO Engineer.pdf",
  role_3: path + "/Documents/DO Grad Assoc Engineer.pdf",
  extra: path + "/Documents/DO Specialist Engineer.pdf"
}

var infraPdf = {
  role_tech_1: path + "/Documents/IS Executive Engineer.pdf",
  role_tech_2: path + "/Documents/IS Principal Engineer.pdf",
  role_tech_3: path + "/Documents/IS Specialist Engineer.pdf",
  role_manager_1: path + "/Documents/IS EM Engineering.pdf",
  role_manager_2: path + "/Documents/IS Senior Manager Engineering.pdf",
  role_manager_3: path + "/Documents/IS Manager Engineering.pdf",
  role_1: path + "/Documents/IS Senior Engineer.pdf",
  role_2: path + "/Documents/IS Engineer.pdf",
  role_3: path + "/Documents/IS GradAssoc Engineer.pdf",
}

var softwarePdf = {
  role_tech_1: path + "/Documents/SE Chief.pdf",
  role_tech_2: path + "/Documents/SE Principal.pdf",
  role_tech_3: path + "/Documents/SE Specialist.pdf",
  role_manager_1: path + "/Documents/SE Executive Manager.pdf",
  role_manager_2: path + "/Documents/Technical Manager SE.pdf",
  role_manager_3: path + "/Documents/SE Lead.pdf",
  role_1: path + "/Documents/SE Senior.pdf",
  role_2: path + "/Documents/SE.pdf",
  role_3: path + "/Documents/Graduate or Associate SE.pdf",
}

var systemsPdf = {
  role_tech_1: path + "/Documents/SE Chief.pdf",
  role_tech_2: path + "/Documents/SE Principal.pdf",
  role_tech_3: path + "/Documents/SE Specialist.pdf",
  role_manager_1: path + "/Documents/SE Executive Manager.pdf",
  role_manager_2: path + "/Documents/Technical Manager SE.pdf",
  role_manager_3: path + "/Documents/SE Lead.pdf",
  role_1: path + "/Documents/SE Senior.pdf",
  role_2: path + "/Documents/SE.pdf",
  role_3: path + "/Documents/Graduate or Associate SE.pdf",
}

var generic = {
  role_tech_1: {
    name: "Executive Consultant",
    nutshell: [
      "Outstanding capability and impact. Overall technical accountability for a platform's technology."
    ],
    competency: [
      "Demonstrates outstanding competency in core technology and practices across substantial strategic assets and practices at the platform level.",
      "Demonstrates advanced to outstanding competency in adjacent and/or underlying technology and practices.",
      "Utilises and makes contribution to industry resources and practices.",
      "Seen as an expert by industry standards.",
    ],
    delivery: [
      "Independently undertakes highly complex tasks and will take on the most difficult aspects.",
      "Oversees and supports delivery by all consultants in platform, providing expert and strategic guidance.",
      "Major contribution to complex delivery planning with expert advice.",
      "Demonstrates innovation through concrete application of technical skills to complex business problems. ",
    ],
    personal: [
      "Maintains core capabilities and domain knowledge at an outstanding level.",
      "Continuous development in areas relating to asset and practice accountability, utilising a wide range of internal and external resources.",
    ],
    practice: [
      "Accountable for strategic development of all practices within remit",
      "Leads cross team/platform practice activities"
    ],
    strategy: [
      "Strong understanding of the broader business and technical context and long term impacts of technology, actively identifies and addresses operational concerns, long term sustainability, etc.",
      "Accountable for strategy pertaining to all technical assets within remit.",
      "Informs strategy through cutting edge research and industry best practice knowledge."
    ],
    accountability: [
      "Accountable for platform level technical assets"
    ],
    leadership: [
      "Technical leadership across a platform and contribution to the group level",
      "Team member and mentor/support for more junior consultants"
    ],
    team: []
  },
  role_tech_2: {
    name: "Principal Consultant",
    nutshell: [
      "Outstanding capability and impact. Responsibility for large scale areas of technology and practice."
    ],
    competency: [
      "Demonstrates outstanding competency in core technology and practices across a wide remit.",
      "Demonstrates advanced to outstanding competency in adjacent and/or underlying technology and practices.",
      "Utilises and makes contribution to industry resources and practices.",
      "Seen as an expert by industry standards.",
    ],
    delivery: [
      "Independently undertakes moderately to highly complex tasks and will take on the most difficult aspects.",
      "Oversees and supports delivery by consultants in areas of expertise providing expert and strategic guidance.",
      "Major contribution to complex delivery planning with expert advice.",
      "Demonstrates innovation through concrete application of technical skills to complex business problems.",
    ],
    personal: [
      "Maintains core capabilities and domain knowledge at an outstanding level.",
      "Continuous development in areas of specialist expertise, utilising a wide range of internal and external resources.",
    ],
    practice: [
      "Leader and champion of strategic practice development within team/platform.",
      "Leads cross team/platform practice activities."
    ],
    strategy: [
      "Strong understanding of the broader business and technical context and long term impacts of technology, actively identifies and address operational concerns, long term sustainability, etc.",
      "Leads development technical strategies in areas of expertise.",
      "Identifies, gains support for, and ensures execution of  strategic direction in areas of expertise."
    ],
    accountability: [
      "Responsible for nominated technical assets related to areas of expertise. Includes roadmaps and technical direction."
    ],
    leadership: [
      "Technical leadership in areas of expertise within the platform and contribution to the group level.",
      "TTeam member and mentor/support for more junior consultants."
    ],
    team: []
  },
  role_tech_3: {
    name: "Specialist Consultant",
    nutshell: [
      "Advanced capability and impact. Responsibility for technology and/or practice areas."
    ],
    competency: [
      "Demonstrates advanced competency in core technology capabilities and practices and clearly demonstrates outstanding competency in one or more key areas.",
      "Demonstrates competency in relevant underlying or adjacent technology and practices",
      "Utilises and makes contribution to industry resources and practices",
      "Seen as an expert by industry standards",
    ],
    delivery: [
      "Independently undertakes moderately to highly complex tasks and will take on the most difficult aspects.",
      "Oversees and supports more junior consultants, providing expert guidance in key areas.",
      "Contributes to delivery planning with expert advice.",
      "Demonstrates innovation through concrete application of technical skills to complex business problems."
    ],
    personal: [
      "Maintains core capabilities and domain knowledge at an advanced level.",
      "Continuous development in areas of specialist expertise, utilising a wide range of internal and external resources.",
    ],
    practice: [
      "Leader and champion of strategic practice development within team/platform.",
      "Regularly contributes to team/platform practice activities."
    ],
    strategy: [
      "Has a strong understanding of core business and technical strategies and how own role and broader practice relates to those strategies.  Actively identifies and address operational concerns, long term sustainability, etc.",
      "Leads development technical strategies in areas of expertise.",
      "Identifies, gains support for, and ensures execution of  strategic direction in areas of expertise.",
    ],
    accountability: [
      "Responsible for nominated technical assets related to areas of expertise. Includes roadmaps and technical direction."
    ],
    leadership: [
      "Technical leadership in areas of expertise.",
      "Team member and mentor/support for more junior consultants."
    ],
    team: []
  },
  role_manager_1: {
    name: "Executive Manager",
    nutshell: [
      "Experienced people manager of large teams including managers.",
      "Actively contributes to and leads technology, people and practice activities across the group."
    ],
    competency: [
      "Maintaining competency in relevant technology and practices.",
      "Demonstrates growing competency in relevant adjacent or underlying technology and practices",
    ],
    delivery: [
      "Accountable use of appropriate practices and standards across delivery initiatives.",
      "Works closely with senior delivery leadership and practice managers to ensure teams are set up for success.",
      "Contributes to delivery strategy at the group level"
    ],
    personal: [
      "As for Senior Manager with larger scale and increased emphasis on developing  leaders and leadership across the group.",
    ],
    practice: [
      "Accountable for the strategic development and implementation of practices relevant to the domain.",
      "Leads and contributes to development of practices across the group."
    ],
    strategy: [
      "Has a strong understanding of, and contributes too, core business and technical strategies.",
      "Accountable for adoption across teams.",
      "Contributes to technology and practice strategy at the group level.",
    ],
    accountability: [
      "Strong awareness of key assets and accountability for alignment of technical practices to them."
    ],
    leadership: [
      "Provide strong people and practice leadership across a platform.",
      "Ensure collaboration across platform teams.",
      "Team member and mentor/support for more junior consultants."
    ],
    team: [
      "Accountable for team capability and talent",
      "Ensure team structure supports delivery and practice needs.",
      "Lead and contribute to group-wide people and practice initiatives."
    ]
  },
  role_manager_2: {
    name: "Senior Manager",
    nutshell: [
      "Experienced people manager."
    ],
    competency: [
      "Maintaining competency in relevant technology and practices.",
      "Demonstrates growing competency in relevant adjacent or underlying technology and practices."
    ],
    delivery: [
      "Persuasively represents practise and quality concerns in a delivery focussed environment.",
      "Ensures that technical delivery processes are tuned for quality and efficiency.",
      "Works closely with delivery leadership to ensure that appropriately team members are assigned and set up for success."
    ],
    personal: [
      "As for manager with increased emphasis on career development of team members and at larger scale.",
    ],
    practice: [
      "Contributes to strategic development of practices and manages adoption across teams."
    ],
    strategy: [
      "Has a strong understanding of, and contributes too, core business and technical strategies.",
      "Manages adoption across teams."
    ],
    accountability: [
      "Strong awareness of key assets and ensures technical practices are appropriate for them."
    ],
    leadership: [
      "Provide strong people and practice leadership across multiple teams.",
      "Collaborates across platforms.",
      "Team member and mentor/support for more junior consultants."
    ],
    team: [
      "Recruit, induct and retain high quality team members.",
      "Ensure skills mix meets current and predicted needs.",
      "Drive cultural and process changes supporting modern delivery practices."
    ]
  },
  role_manager_3: {
    name: "Manager / Team Lead",
    nutshell: [
      "First foray into people management with a small team."
    ],
    competency: [
      "Demonstrates advanced competency in core technology and practices.",
      "Demonstrates growing competency in relevant adjacent or underlying technology and practices"
    ],
    delivery: [
      "Mentors and assists team members in delivery activities",
      "Manage task allocation of initiatives to most effectively meet delivery and strategic priorities"
    ],
    personal: [
      "Personal development weighted toward mentoring, people leadership and communications.",
    ],
    practice: [
      "Supports team in execution of practices."
    ],
    strategy: [
      "Has a strong understanding of core business and technical strategies and supports own team in understanding and working in harmony with those strategies."
    ],
    accountability: [
      "Awareness of key assets and how technical practices relate to them."
    ],
    leadership: [
      "Provide people and practice leadership to a small team.",
      "Team member and mentor/support for more junior consultants."
    ],
    team: [
      "Support Senior Manager in Team Development activities.",
      "Provide guidance and mentoring to team members."
    ]
  },
}

var role_tech_1 = $('.role_tech_1');
role_tech_1.on('click', function() {
  var role = $(this).find('.role').text();
  console.log(role);
  console.log(engineering.generic.role_tech_1);
  if (engineering.devops.active && role === engineering.devops.role_tech_1) {
    window.open(devopsPdf.role_tech_1, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_tech_1) {
    window.open(infraPdf.role_tech_1, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_tech_1) {
    window.open(software.role_tech_1, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_tech_1) {
    window.open(systems.role_tech_1, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_tech_1) {
    var generic = document.getElementById('generic');
    generic.style.display = "block";
  }
});

var role_tech_2 = $('.role_tech_2');
role_tech_2.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_tech_2) {
    window.open(devopsPdf.role_tech_2, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_tech_2) {
    window.open(infraPdf.role_tech_2, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_tech_2) {
    window.open(software.role_tech_2, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_tech_2) {
    window.open(systems.role_tech_2, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_tech_2) {
    // open modal for generic descriptions
  }
});

var role_tech_3 = $('.role_tech_3');
role_tech_3.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_tech_3) {
    window.open(devopsPdf.role_tech_3, '_blank');
    window.open(devopsPdf.extra, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_tech_3) {
    window.open(infraPdf.role_tech_3, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_tech_3) {
    window.open(software.role_tech_3, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_tech_3) {
    window.open(systems.role_tech_3, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_tech_3) {
    // open modal for generic descriptions
  }
});

var role_manager_1 = $('.role_manager_1');
role_manager_1.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_manager_1) {
    window.open(devopsPdf.role_manager_1, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_manager_1) {
    window.open(infraPdf.role_manager_1, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_manager_1) {
    window.open(software.role_manager_1, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_manager_1) {
    window.open(systems.role_manager_1, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_manager_1) {
    // open modal for generic descriptions
  }
});

var role_manager_2 = $('.role_manager_2');
role_manager_2.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_manager_2) {
    window.open(devopsPdf.role_manager_2, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_manager_2) {
    window.open(infraPdf.role_manager_2, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_manager_2) {
    window.open(software.role_manager_2, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_manager_2) {
    window.open(systems.role_manager_2, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_manager_2) {
    // open modal for generic descriptions
  }
});

var role_manager_3 = $('.role_manager_3');
role_manager_3.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_manager_3) {
    window.open(devopsPdf.role_manager_3, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_manager_3) {
    window.open(infraPdf.role_manager_3, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_manager_3) {
    window.open(software.role_manager_3, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_manager_3) {
    window.open(systems.role_manager_3, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_manager_3) {
    // open modal for generic descriptions
  }
});

var role_1 = $('.role_1');
role_1.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_1) {
    window.open(devopsPdf.role_1, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_1) {
    window.open(infraPdf.role_1, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_1) {
    window.open(software.role_1, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_1) {
    window.open(systems.role_1, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_1) {
    // open modal for generic descriptions
  }
});

var role_2 = $('.role_2');
role_2.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_2) {
    window.open(devopsPdf.role_2, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_2) {
    window.open(infraPdf.role_2, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_2) {
    window.open(software.role_2, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_2) {
    window.open(systems.role_2, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_2) {
    // open modal for generic descriptions
  }
});

var role_3 = $('.role_3');
role_3.on('click', function() {
  var role = $(this).find('.role').text();
  if (engineering.devops.active && role === engineering.devops.role_3) {
    window.open(devopsPdf.role_3, '_blank');
  } else if (engineering.infra.active && role === engineering.infra.role_3) {
    window.open(infraPdf.role_3, '_blank');
  } else if (engineering.software.active && role === engineering.software.role_3) {
    window.open(software.role_3, '_blank');
  } else if (engineering.systems.active && role === engineering.systems.role_3) {
    window.open(systems.role_3, '_blank');
  } else if (engineering.generic.active && role === engineering.generic.role_3) {
    // open modal for generic descriptions
  }
});
