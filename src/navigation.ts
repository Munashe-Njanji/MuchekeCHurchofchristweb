import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },

        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },

        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About Us',
      links: [
        { text: 'Our Mission', href: '#' },
        { text: 'History', href: '#' },
        { text: 'Leadership Team', href: '#' },
        { text: 'Community Impact', href: '#' },
        { text: 'Testimonials', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Sunday Worship', href: '#' },
        { text: 'Bible Study', href: '#' },
        { text: 'Prayer Meetings', href: '#' },
        { text: 'Youth Programs', href: '#' },
        { text: 'Community Services', href: '#' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { text: 'Volunteer', href: '#' },
        { text: 'Donate', href: '#' },
        { text: 'Events', href: '#' },
        { text: 'Support Groups', href: '#' },
        { text: 'Join Our Newsletter', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Contact Us', href: '#' },
        { text: 'Locations', href: '#' },
        { text: 'FAQs', href: '#' },
        { text: 'Support', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="Mucheke Church of Christ logo" loading="lazy"></img>
    Made with ❤️ by Mucheke Church of Christ · All rights reserved.
  `,
};
