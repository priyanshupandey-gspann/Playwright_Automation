import {test,expect} from '@playwright/test'

test('Vefication that signup details are filled',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    await page.getByPlaceholder('Name').pressSequentially("Priyanshu",{delay:100})

    await page.getByPlaceholder('Email').pressSequentially("priyanshu@abcde.com",{delay:100})
    await page.getByPlaceholder('Password').pressSequentially("PASSword",{delay:100})

    
    await page.getByLabel('Java', { exact: true }).check();
    await page.getByLabel('Playwright', { exact: true }).check();

    
    await page.selectOption('#state', { label: 'Uttarakhand' });

    await page.selectOption('#hobbies', [
    { label: 'Playing' },
    { label: 'Reading' }
    ]);

    await page.getByRole('button', { name: 'Sign up' }).click();
    
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');


    await page.waitForTimeout(2000)

})