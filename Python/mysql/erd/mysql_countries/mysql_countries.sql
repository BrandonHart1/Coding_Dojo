-- SELECT * FROM languages;
-- use commas to separate???
-- Do I have to use all the categories???
-- Combine all into one???  
-- Can we use dot-notation???


-- SELECT world.languages.language AS language_name, world.countries.name AS country_name, world.languages.percentage 
-- FROM world.languages JOIN world.countries ON world.languages.country_id = world.countries.id 
-- WHERE world.languages.language = "Slovene"
-- ORDER BY world.languages.percentage DESC;

SELECT countries.name, COUNT(cities.name) AS city_count
FROM countries 
JOIN cities ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY city_count DESC


-- What query would you run to display the total number of cities for each country? Your query should return the name of the country and the total number of cities. Your query should arrange the result by the number of cities in descending order.



