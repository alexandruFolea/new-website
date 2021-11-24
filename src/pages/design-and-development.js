import { GoCommentDiscussion, GoCalendar } from 'react-icons/go';
import { BsFileEarmarkMedical, BsFillPatchQuestionFill } from 'react-icons/bs';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { GiMissileLauncher } from 'react-icons/gi';
import { MdUpdate } from 'react-icons/md';
import Head from 'next/head';

import Footer from '../components/Footer';
const designAndDevelopment = () => {
	return (
		<>
			<Head>
				<title>Alex Folea - Design & Development</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='design__and__development'>
				<div className='process__container'>
					<div className='process__container__title'>
						<h1>About my process</h1>
						<p>
							In the event that you or your company would consider me a good fit
							for your next project, we&apos;d undergo the following steps:
						</p>
					</div>
					<div className='process__container__grid__container'>
						<div className='process__container__grid__item'>
							<div className='grid__item__icon'>
								<GoCommentDiscussion />
							</div>
							<div className='grid__item__text'>
								<h3>Discuss Project</h3>
								<p>
									Finding more information about your business and make sure
									your project is a good fit for the services I provide.
								</p>
							</div>
						</div>
						<div className='process__container__grid__item'>
							<div className='grid__item__icon'>
								<BsFileEarmarkMedical />
							</div>
							<div className='grid__item__text'>
								<h3>Proposal & Prep</h3>
								<p>
									Project proposal that will outline the timeline, cost, and
									details I need to get started on your project.
								</p>
							</div>
						</div>
						<div className='process__container__grid__item'>
							<div className='grid__item__icon'>
								<GoCalendar />
							</div>
							<div className='grid__item__text'>
								<h3>Plan & Design</h3>
								<p>
									In depth nieche research and pulling the creative elements
									together to create a cohesive, modern design.
								</p>
							</div>
						</div>
						<div className='process__container__grid__item'>
							<div className='grid__item__icon'>
								<MdOutlineDeveloperMode />
							</div>
							<div className='grid__item__text'>
								<h3>Develop & Test</h3>
								<p>
									Building your design into a finessed website and thoroughly
									test functionality on different devices and browsers.
								</p>
							</div>
						</div>
						<div className='process__container__grid__item'>
							<div className='grid__item__icon'>
								<GiMissileLauncher />
							</div>
							<div className='grid__item__text'>
								<h3>Launch!</h3>
								<p>
									Transfer the website files and database of your server (if
									applicable), point the domain, and make any final touches.
								</p>
							</div>
						</div>
						<div className='process__container__grid__item'>
							<div className='grid__item__icon'>
								<MdUpdate />
							</div>
							<div className='grid__item__text'>
								<h3>Maintain & Update</h3>
								<p>
									Backup, update, and maintain the website. Monitor the website
									24/7 to check for issues or downtime.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='faqs__container'>
					<div className='faqs__container__title'>
						<h1>
							<BsFillPatchQuestionFill /> Frequently asked questions
						</h1>
					</div>
					<div className='faqs__container__grid'>
						<div className='faqs__container__grid__item'>
							<h3>How long will my website take to build?</h3>
							<p>
								This can vary based on the project requirements and your
								specific needs. With that said, I typically have a pretty fast
								turnaround for projects. An average project takes around 2-3
								weeks.
							</p>
						</div>

						<div className='faqs__container__grid__item'>
							<h3>Do I own my website?</h3>
							<p>
								Yes. Once you make the final payment on your site, you own the
								website files outright.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>What are the payment terms?</h3>
							<p>
								50% of the total project cost is required upfront as a
								downpayment, and the remainder on the final review of the
								website before it is launched and the domain is pointed.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>Where should my website be hosted?</h3>
							<p>
								This can vary depending on your needs, but for a majority of
								small businesses, you can get a reliable shared server with low
								latency for around $5-$10/month.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>Can I update the website myself?</h3>
							<p>
								Absolutely. You&apos;ll have access to the backend of the
								website where you can log in and make changes yourself. I am
								also happy to make content updates for you as part of the
								maintenance plan.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>Will my website work on mobile devices?</h3>
							<p>
								Yes. I have been designing responsive websites for the past
								4years. All my websites are thoroughly tested on the latest
								mobile devices and browsers.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>How much input do I have?</h3>
							<p>
								Website design is a collaborative process, and I will ask for
								your ideas, feedback, and approval throughout all stages of the
								project. Some clients do not have a preference or would prefer
								me to have complete creative direction with their project, which
								I am more than happy to do. In these cases, I dive in and
								research your niche to create your design.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>Who writes the content for my website site?</h3>
							<p>
								You do. No one knows your business better than you! My specialty
								is taking that content and weaving it perfectly into your
								website. However, if you need content provided for your site,
								let me know and I can point you in the right direction.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>What do I need to get started?</h3>
							<p>
								This can vary based on the project requirements and your
								specific needs. With that said, I typically have a pretty fast
								turnaround for projects. An average project takes around 2-3
								weeks.
							</p>
						</div>
						<div className='faqs__container__grid__item'>
							<h3>How long will my design last in terms of relevancy?</h3>
							<p>
								I design my sites with focus on legevity and flexibility, with
								the ability to expand, update and scale your website as your
								business grows and changes. The typical industry standard is to
								update your website every 2-4 years, but I am happy to partner
								with my clients to create long-lasting sites that are easy to
								refresh.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default designAndDevelopment;
