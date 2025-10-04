/* Task One 

1. Insert new record to the account table
*/
INSERT INTO public.account ( account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');


--2. Modify the Tony Stark record 

UPDATE public.account SET account_type = 'Admin' WHERE account_id = 1;


--3. Delete the Tony Stark record 

DELETE FROM public.account WHERE account_id = 1;


--4. Modify the "GM Hummer" record

UPDATE public.inventory SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior') WHERE inv_id = 10;


--5. Use an inner join to select the make, model and classification name

SELECT inv.inv_make, inv.inv_model, cl.classification_name FROM public.inventory inv JOIN public.classification cl ON inv.classification_id = cl.classification_id WHERE cl.classification_name = 'Sport';


--6. Update all records to add "/vehicles" 

UPDATE public.inventory SET inv_image = REPLACE(inv_image, '/images', '/images/vehicles'), inv_thumbnail = REPLACE(inv_thumbnail, '/images', '/images/vehicles');