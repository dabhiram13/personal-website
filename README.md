This guide will help you customize this portfolio for your own use. s

what you'll get:
• clean and modern design
• smooth scrolling experience
• responsive layout
• video showcase capabilities
• easy to customize sections

getting started:

1. clone and setup
```bash
git clone [your-repo-url]
cd portfolio
npm install
```

2. customize your info
open `app/data.ts` and update these things:
• your name
• about you section
• your skills
• contact information
• social media links

3. add your projects
go to `app/data.ts` and find the projects section:
• add your project title
• write a nice description
• put in the tech stack you used
• add a video or image (put them in public folder)

4. change the videos
• put your video files in the `public` folder
• use mp4 format for best results
• name them clearly like 'project1.mp4'

5. style changes
• colors: check `app/globals.css`
• fonts: look in `app/layout.tsx`
• components: find them in `components` folder

6. deployment
• build your site: `npm run build`
• test locally: `npm run start`
• deploy on vercel or your favorite platform

tips:
• keep video files small for better loading
• test on mobile to make sure it looks good
• update your projects regularly
• make sure all links work
