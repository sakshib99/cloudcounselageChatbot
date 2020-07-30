const menu = "Hi, how may I help you?<br>Please reply with the corresponding options.<br>1.General IP Queries<br>2.Learning Path 1<br>3.Learning Path 2 <br>4.Learning Path 3<br>5.Live Projects";
const optmenu = ["1.General IP Queries","2.Learning Path 1","3.Learning Path 2","4.Learning Path 3","5.Live Projects"];
//General isssues categories,questions,answers
const menu1c = ["1.IP Issues","2.Bitrix24 Issues","3.Training Issues","4.Browser Issues","5.Technology Issues","6.Efficiency ,clock-in, Report/Task Submission Issues","7.Induction Issues","8.Other Queries"];
const menu1q = [
                "1.IP Start Date<br>2.IP End Date<br>3.What is IP?<br>4.How is IP?",
                "1. I m not able to access my Bitrix24 account?<br>2.How many workgroups will an intern be a part of?<br>3.I am not able to see my tasks.<br>4.I tried it 3-4 times and have to enter token each time I visit it.<br>5.I am logged in the training and still the website asks me to login<br>6.I am having trouble finding the workgroup ( no workgroup is visible)<br>7.Not able to see the task as not part of the IP workgroup.<br>8.How can we check our weekly hours?<br>9.By when will we receive access to Bitrix24?<br>10.Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?",
                "1.I have complete one training, I didn't find any options to continue my training.<br>2.I am not getting results of the training.<br>3.Unable to access the quiz<br>4.Do I need to pass with the certificate in training.<br>5.Do we need to complete all the six steps within 14 hours?<br>6.Can we skip any training if we are already clear with the basics?<br>7.Resource links not working. What to do? Should we skip?<br>8.Could I have done this training from other websites/ resources?",
                "1.Which Browser I should use?<br>2.The web pages on mobile are not showing properly.<br>3.I  am getting an error: General error: 1 no such table: layout, what should I do?",
                "1.Can I learn and do internship in more than one technology?<br>2.Can I switch my technology now?<br>3.If we are working on more than one technology, are those technologies added to the certificate? <br>4.I have not been added to the technology I preferred to work on? ",
                "1.Do we need to clock-in for 7 hours a week even if the tasks are completed?<br>2.My Efficiency is 0% what should I do?<br>3.I forgot to clock in for a few days, will this affect my internship?<br>4.I have not got the acknowledgment from you regarding the weekly report.<br>5.In my work time I can see one exclamation mark?/ What does the remaining time mean?<br>6.When will my review on social media update task be done?<br>7.Can we be online after 1 hr in a day?<br>8.Is it necessary to clock-in if I am done with my tasks?<br>9.I am trying to complete social media tasks but it doesn't show finish after completion.<br>10.What do we do in the work report?",
                "1.Is the induction online or offline?<br>2.I could not attend the induction last time, can I get an online induction again?<br>3.Can I just finish the task that you have just uploaded as I have attended the live induction session on 22nd of march",
                "1.What is the job profile?<br>2.How do I start my internship?<br>3.What to do when our university exams start?<br>4.Is it okay to mention this internship as ongoing for college records?<br>5.Can we do another internship with IP?<br>6.When will we get a joining letter?<br>7.When will we get an internship completion letter?<br>8.Can my friends still apply for the Internship Program (IP) - Maharashtra?<br>9.Will you provide mentorship or doubt clearing sessions in this internship?<br>10.Can we be hired by Cloud Counselage after this internship?<br>11.Can we visit the office? How many times do we have to visit the office for this internship?<br>12.Can we extend this internship?<br>13.What are the company policies for IP interns?<br>14.Appointment letter not received by applicant<br>15.When will the step 3 of the internship program start?"
            ];
const menu1a = [
                    ["01/03/2020","31/07/2020","Watch the below video<br>URL:<br><a href='https://www.youtube.com/watch?v=OnKfrQrEOrk&feature=emb_logo' style='color:cyan'>https://www.youtube.com/watch?v=OnKfrQrEOrk&feature=emb_logo</a>","Watch the below video<br>URL:<br><a href='https://www.youtube.com/watch?v=Hs9npUUIg4I&feature=emb_logo' style='color:cyan'>https://www.youtube.com/watch?v=Hs9npUUIg4I&feature=emb_logo</a>"],
                    [
                        "Go to <a href='https://cloudcounselage24.bitrix24.com/' style='color:cyan'>https://cloudcounselage24.bitrix24.com/</a><br>On the Login page, In the, ‘Enter the phone number or email’,<br>type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’.<br> In case the problem persists, please write a mail to <a href='mailto:hrsupport@cloudcounselage.in' style='color:cyan'>hrsupport@cloudcounselage.in</a>",
                        "Every intern should be a part of 2 workgroups.<br>1.202003-IP -- This is a general workgroup.<br>Everyone who is enrolled in IP should be a part of this workgroup.<br>2. 202003-IP-Technology  -- This is a technology-specific workgroup. <br>You'll be added to the technology you had enrolled for.<br> For example 202003-IP-Python for students who enrolled for python.<br>If anyone has not been added to any of these workgroups,<br>kindly message 'Cloud Counselage HR' regarding the same over bitrix24 platform.",
                        "Please remove the default 'In Progress' from your filter of the task section and try.",
                        "We understand that it sometimes becomes tedious to access the training and<br> we highly appreciate your support in making the training possible.<br> We only do this for security reasons and we're trying to find a way to minimise the token use.<br> For now, please note that in LP1 there are 3 types tokens:<br>1. One for each technology, you're a part of.<br>2. The lp1 home page.<br>3. The 6 tokens (one for each step)",
                        "This could be because of some issue in the cookies or extension in your browser.<br> Please try again with a different browser or open the tab with incognito mode.<br> Also, you don't need to record your results, <br>the quizzes are only for your knowledge check and not a metric to score you.",
                        "Please ensure that you have connected to the drive of that workgroup<br> by going to your notification and connecting to the drive of that workgroup.<br> If that is done, please try to search for your workgroup in the search bar at the top of your screen.<br> To search, use the keywords, 202003-IP-TechnologyName. Ex 202003-IP-DevOps.<br> In case there is no invitation to you, please message Cloud Counselage HR.<br> You will be added to 2 groups “202003-IP” which is a general workgroup and<br> the other one is “202003-IP-Technology” which is a technology-specific workgroup.",
                        "Please message ‘Cloud Counselage HR’ in Bitrix24 ",
                        "In the menu select 'time and reports' ->worktime and then you could<br> see your worktime or click on this link once you’re logged in to Bitrix24<br><a href='https://cloudcounselage24.bitrix24.com/timeman/timeman.php' style='color:cyan'>https://cloudcounselage24.bitrix24.com/timeman/timeman.php</a>",
                        "If you have submitted the ‘New Joinee Form’ after the 1st of March,<br> please wait till the 31st of March to receive your access.",
                        "Yes, you need to register for every module of training.<br> Some of you are facing login issues, we have kept the training visible without login. <br>Even then, to post a comment and give a quiz you'll have to login.<br> In case you face difficulty to do so, please try to perform your quiz or post a comment<br> by using a different browser or incognito mode."
                    ],
                    [
                        "Go back to the technology Page.<br>Enter the respective tokens and then work.<br> follow the same process every time.",
                        "They are just for your practice and not for our record,<br> so you don't need the results of LP1 and LP2 training.",
                        "Please retry after some time in an incognito window",
                        "No, but please ensure you complete the training.",
                        "It's preferred if you complete the LP1 training in 2 weeks but not mandatory.<br> LP1, LP2, and LP3 are expected to be completed before the live projects start in July;<br> but that doesn't mean you should give anything less than 1 hour a day or 7 hours a week<br> towards the learning paths (LP).",
                        "No, these pieces of training will cover basics and there is no harm in brushing up your skills<br> before you start with the assignments later.",
                        "Please do not skip any piece of training,<br>in case you're not able to access any link<br> please message to Cloud Counselage HR and drop an email to <br><a href='mailto:hrsupport@cloudcounselage.in' style='color:cyan'>hrsupport@cloudcounselage.in</a> regarding the same.",
                        "Yes, you could have but the reason to have these videos is to keep<br> an enclosed environment for you to watch these tutorials without distractions with<br> quizzes and forums for you to discuss in.<br> As mentioned earlier, our main aim is to provide you<br> with a starting point and baseline for the technology of your choice."
                    ],
                    [
                        "Google Chrome is recommended.",
                        "They are purposefully only configured for Desktops/ Laptops.<br> In an emergency, you can use the show as desktop mode of your browser.",
                        "This is due to many webpages opened, please close your browser <br>and try again or you can open a new incognito tab and try again."
                    ],
                    [
                        "You can learn more than one technology using Learning Path 2 (LP2)<br> which will begin after the 2nd week of March, but your internship<br> will only be continuing with the one you are selected for.",
                        "You cannot switch the technology currently.<br> You have to continue with the one you are selected for.<br> In the case of multiple form entries, you just got selected for one of them;<br> the first one that you entered.<br> You cannot make a switch right now.",
                        "You are not restricted from doing the training of other technologies but you <br>will only be given an internship certificate of the technology you’re selected for.",
                        "We do understand that you might be interested in other technologies and are eager to learn more,<br> but we have prescribed the technologies based on your first inputs and cannot change your base technology.<br> Nevertheless, you do have the opportunity to go through the training of all the technologies."
                    ],
                    [
                        "If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours.<br> However, you should keep a track of all the updates of the internship being posted on the groups.",
                        "Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started.<br> Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. <br>However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.",
                        "This could have an adverse effect on your internship, please contact Cloud Counsealge HR and<br> provide a genuine reason to miss clock in/ clock out.<br> Also, please start performing your clock in/ clock out now.",
                        "Once you submit your weekly report, your supervisor and the HR team shall take the cognizance.<br> They would reach out to you in case of discrepancies, so you need not worry about the confirmation.",
                        "It is showing the remaining time because it's configured for 8 working hours per day.<br> Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.",
                        "We will review this task in May 2020.",
                        "Yes, you can be.",
                        "Yes, it is mandatory to do, we are trying to include some more tasks due to<br> the current scenarios, but adherence to clock-in/ clock-out policy is utterly important.",
                        "Our team will verify and then only your task shall be accepted as completed.<br> Please wait till the verification's complete.",
                        "As mentioned in the video, please write what you have done this week and<br> request approval from your supervisor by clicking on send to supervisor."
                    ],
                    [
                        "As a precautionary measure to safeguard our intern’s health,<br> we have decided to conduct all the inductions online.",
                        "We have created a separate page with a pre-recorded induction, please visit it; <a href='https://www.cloudcounselage.co.in/ipinduction' style='color:cyan'>https://www.cloudcounselage.co.in/ipinduction</a>",
                        "Yes. Although, you can always revisit the induction so that you<br> can review what has been said in it."
                    ],
                    [
                        "Your job profile is 'Technology - Intern'; if you're in cloud computing technology to<br> update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'.<br> Yes, you'll only work in the technology you're selected for but you can take the training of other technologies.",
                        "Please go through the mail from which you have accepted the invite and check the task section as well.",
                        "We have provided our interns with preparatory leave from the exam season, nevertheless,<br> you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.",
                        "Yes, we'll provide every intern a joining letter as soon as all interns are inducted. ",
                        "Yes, you can do another internship outside of Cloud Counselage but <br>please ensure to provide 1 hour a day or 7 hours a week for IP.",
                        "Joining letter to all the interns will be provided on or before the 31st of March 2020.",
                        "This is a three (3) month internship conducted in the month of March, June & July 2020. <br>You will receive your internship experience letter in August during the convocation <br>only if you successfully submit your Live Project.",
                        "Yes, your friends can apply till the 30th of March 2020;<br><a href='https://www.cloudcounselage.com/ipmaharashtra/' style='color:cyan'> https://www.cloudcounselage.com/ipmaharashtra/</a>.<br> To be a student representative of Cloud Counselage, please contact Cloud Counselage HR.",
                        "As this is an internship you’re expected to do self-learning, mentorship is not part of an internship.<br> However, we have created forums to resolve your doubts in the form of workgroups.<br> As an intern ensure that you are part of relevant workgroups, i.e. ‘202003 - IP’ and your resp. Technology workgroup. <br>In case, you are not a part of these workgroups, please reach out to ‘Cloud Counselage HR’ on Bitrix24 Chat.",
                        "All our current interns if performing well in our internship programs can be offered an opportunity to<br> interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage.",
                        "As this is an online internship you do not need to visit the offices in the duration of this internship.<br> You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020.<br> Nevertheless, you can visit our offices with an appointment.",
                        "Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’.",
                        "The company policies will be published on <a href='https://www.cloudcounselage.co.in/ippolicies' style='color:cyan'>https://www.cloudcounselage.co.in/ippolicies</a>",
                        "If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March.<br> Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to<br> <a href='mailto:hrsupport@cloudcounselage.in' style='color:cyan'>hrsupport@cloudcounselage.in</a> or ping 'Cloud Counselage HR' in B24.",
                        "According to the schedule of this internship program, some of you must have completed steps 1 and 2 of your internship and<br> some of you must be in the process of completing step 2.<br>Please note that as per the program schedule the following are the dates for entering step 3,wherein interns take preparatory<br> leaves for exams 16th April 2020 - access given before 31st March 2020<br> b)01st May 2020 - access given after 31st March 2020"
                    ]
                ];
//LP1 categories,question and answers
const menu2c = "1.Token Issues<br>2.Quiz Issues<br>3.Domain Queries<br>4.Other Issues";
const menu2q = [
                    "1.Not able to access the LP1 page with my token<br>2.I am applying my 2nd token that is the LP1 then it shows invalid user<br> but the first token was accepted. ",
                    "1.What do I do after completing the quiz? <br>2.How do I access my quiz?",
                    "1.Is it necessary to attend LP1 for other domains as well if we want to take its training.<br>2.Do I still have to complete the mandatory training for LP1 Cloud Computing?",
                    "1.Do I need to register every time I do different tasks of lp1?<br>2.What to do after completing LP1?<br>3.I had press finished button of LP1 task but want to resume the task, how to do that?<br>4.Can you help me by telling how can I get to know about my progress of LP 1"
                ];
const menu2a = [
                    [
                        "Please watch the videos shared with the invite and you should not face any problems in accessing the training. <br>Please follow the protocol shown in the videos.",
                        "For each training of LP1, there are different tokens.<br> Please read the tasks or watch the videos again meticulously.<br> Try accessing it in incognito mode.",
                    ],
                    [
                        "There are tokens for each training in the task, if this learning path is done,<br> please wait for the next learning path to begin and then please try to finish it.<br> If you are done with LP3 please wait for Live Projects to begin.",
                        "As mentioned in the video: -<br>Step1: Go to lp1 module<br>Step2: Select module<br>Step3: Put token (it will direct you to the home screen if the token is correct)<br>Step4: Again go to lp1 module n select that module<br>Step5: You will get the access by now<br>Step6: Register there (each time for every module)<br>Step7: Give the quiz<br>Step8: Logout",
                    ],
                    [
                        "LP1 training is common across all the technologies",
                        "Yes, you'll need to complete the mandatory training as cloud computing is fundamental <br>to many technologies and this additional knowledge will help you in your career."
                    ],
                    [
                        "There are codes in the LP1 assignment, and each time you have to register also,<br> please check your task description.",
                        "Mark your task as finished and wait for the next instructions.",
                        "You can go back to that task and then click on 'More' and then 'resume' to restart that task.",
                        "There is no metric to score your progress in any learning paths<br> as it will be at a different pace for every individual."
                    ]
                ];
//lp2
const menu3q = "1.What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?<br>2.Why only this training for LP2?<br>3.Can I do certification for the training provided in LP2? <br>4.The videos of LP2 are taking too much time to load.";
const menu3a = [
                    "The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in.<br> The training is also handpicked in such a way that they enable you to work on LP3 assignments which inturn gives you the<br> beginning to start your study for the selected technology and in no terms is the only/ final training you should look into.<br> Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice.",
                    "They are our training partners and we have handpicked this training to cover a certain topic for you.<br> These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point.",
                    "Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the<br> advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership.<br> Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. <br>In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to <a href='mailto:hrsupport@cloudcounselage.in' style='color:cyan'>hrsupport@cloudcounselage.in.</a>",
                    "We have uploaded the videos of the highest quality and best resolution which has resulted in some <br>videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request<br> you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection."
                ];
//lp3
const menu4c = "1.Technical/Problem Query<br>2.Submission Issues<br>3.Other Issues";
const menu4q = [
                    "1.I am stuck in LP3 with a technical issue, Is there any technical person who can help in this?<br>2.I have a query with respect to LP3, what should I do and whom should I ask?<br>3.For some reason, I'm unable to download my LP3 assignment problem statement<br> document shared on LP3 page, is there any other way I can get it?",
                    "1.Where do we push the code in LP3?<br>2.Where should we share our hacker rank id/where should we share the link/ <br>anything relate to LP3 assignment submission?",
                    "1.What happens in LP3? What kind of training can we expect?<br>2.What to do after LP3?<br>3.What will be the projects in AI/ ML/ etc. technologies in LP3?<br>4.LP3 has to be submitted individually or it will be a group project?<br>5.Will these training be enough for us to complete the LP3<br>6.Will I get LP3 of technology other than what I am selected for?"
        
                ];
const menu4a = [
                    [
                        "As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help.<br> Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)",
                        "As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your<br> technology workgroup only and tag Jayanth G S  in your message.",
                        "Since some of you are not able to download, please find the same document in your technology drive in the folder LP3.<br> We have made an announcement in your respective technology workgroup as well, please check."
                    ],
                    [
                        "Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.",
                        "For now, please concentrate on completing the task.<br> We will ask all the interns to submit their work in the first week of June.<br>Ensure you make it up to the mark till then as there would be no extension given that time."
                    ],
                    [
                        "LP3 will be assignment based and its execution and content vary from technology to technology.<br> This assignment will be like a mini-project for all interns in a particular technology which will<br> be verified by Cloud Counselage Project Managers.",
                        "You'll be given preparatory leave (PL) from April to June after that your<br> Live Projects will be given after the first week of June.",
                        "Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage.<br> The actual problem statements will only be given when the LP3/ Live Project phase is in progress<br> to keep the interns focused on LP1/ LP2.",
                        "All the LP3 are on an individual scale.",
                        "The set of training is not exhaustive and you are required to keep learning <br>about the technology on your own to excel in your Live Project.",
                        "No, you will receive LP3 of your respective technology."
                    ]
                ];
//live project
const menu5c = "1.Task Related Queries<br>2.Project Submission/Management Issues<br>3.Web Development Project Issues<br>4.Other Project Related Issues";
const menu5q = [
                    "1.When will be the live project task be alloacted?<br>2.What should I do if I don't get a task allocated for a week?<br>3.I have received this weeks task, but it's showing overdue.What should I do?<br>4.The deadline for this weeks task is not mentioned. Isn't there any deadline?",
                    "1.When and where to submit live project weekly task deliverables?<br>2.Who will be my project manager for Live Project?<br>3.What if I have some doubts in filling the templates shared with us? Who should I contact?<br>4.I have some queries regarding the problem statement. Whom should I reach out to?",
                    "1.Are we free to use any framework of our choice for the front-end?<br>2.Sockets.io is a library and it's used for socket programming so can we use it?<br>3.Does 3rd party dependencies include apis?<br>4.Can I use Dialogflow in Nodejs for creating Bot?",
                    "1.What to do after Live Projects? Are we getting an offer letter/Stipend?<br>2.Problem statements of the Live Project will be chosen by the intern or<br> will be provided by Cloud Counselage?<br>3.Will Live Projects have only one technology or a mixture of technologies?<br>4.Live project's use case will be provided or can we have our own use case?<br>5.Is Live Project a solo project or a team project?<br>6.What is the start date and end date of live project?"
                ];
const menu5a = [
                    [
                        "The live project phase is divided into seven weeks. The task for each week <br>will rolled out on every Monday on the intern's specific technology workgroup.<br> Please go through the same thoroughly to undertand what your task is.",
                        "The weekly tasks are rolled out on every Monday. If you are not allocated a<br> task for a week, please mention this in your technology workgroup. The task will<br> not be allocated if you are mentioning this after 3 days from the day of task allocation.",
                        "This could be a Bitrix 24 error. Please proceed with your task.<br> When it comes to effieciency, please check question number 8 in this document.",
                        "Your weekly task starts from Monday and the deadline will be Sunday."
                    ],
                    [
                        "The submission of all the weekly task deliverables should be done only in the seventh week.<br> You will get information regarding where and how to submit your projects later on.",
                        "Jayanth G S will be your project manager for Live Project.",
                        "Please go through the IP Methodology document shared with you.<br> You will be able to download a workbook template by clicking on the highlighted text(in blue color).<br> Please go through the workbook to understand what needs to be filled in each of the cells.<br> Also go through the IP reference template shared with you. Still if you have queries, please google it. <br>And still if your queries are not clear, please post the question in your technology workgroup tagging Jayanth G S.",
                        "A tech lead has been allocated to each technology.<br> If you have any queries regarding the problem statement, <br>please post it on the workgroup and the techleads will answer your query. <br>Under no circumstances, interns are not supposed to DM the tech leads."
                    ],
                    [
                        "Use any framework built on top of Node.js only.",
                        "Check if it voilates the guildlines mentioned in the above messages<br> and proceed accordingly.",
                        "Yes, if the API is not made by you. In other words, if the API interacts with <br>a 3rd party application, please aviod using it for the Live Project.",
                        "Dialogflow is NLP based solution and also creates a dependency of GCP, we require<br> a basic chatbot in node js and Dialogflow might be overpowered for the same."
                    ],
                    [
                        "Submit your project and once it's reviewed as successful, collect your internship letter.<br> Your internship is complete after this. There is no stipend for live projects.<br> If your work is sublime and we have a vacancy in the position you're interested in, you may be offered <br>a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.",
                        "Live Projects will be provided by Cloud Counselage as these are the ongoing projects of<br> Cloud Counselage and your opportunity to create an impact in the organisation.",
                        "Live Projects will have only your part of technology even if there <br>are multiple technologies that are a part of the project, you will be <br>working only on the part that covers your technology.",
                        "Live project's use case will strictly be provided by Cloud Counselage <br>and you cannot choose your own use case.",
                        "The live project will be a solo project for the interns.",
                        "The start date of live will be 15/06/2020. <br>The end date of live project will be 31/07/2020."
                    ]
                ];
module.exports={menu : menu,optmenu:optmenu.join("<br>"),menu1:menu1c.join("<br>"),menu1q:menu1q,menu1a:menu1a,menu2c:menu2c,menu2q:menu2q,menu2a:menu2a,menu3q:menu3q,menu3a:menu3a,menu4c:menu4c,menu4q:menu4q,menu4a:menu4a,menu5c:menu5c,menu5q:menu5q,menu5a:menu5a};