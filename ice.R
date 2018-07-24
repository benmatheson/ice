library(tidyverse, jsonlite)
library(jsonlite)
setwd("projects/ice")
getwd();
iceRaw <- read_csv("data/b285fe9a-2c1d-420c-814e-aea420eac979_GovernmentSpendingContracts-2017.csv")

iceSelect <- iceRaw %>% select(c(awarding_office_name, recipient_name, recipient_city_name, recipient_state_name, recipient_zip_4_code,base_and_exercised_options_value, primary_place_of_performance_city_name, primary_place_of_performance_state_name, primary_place_of_performance_zip_4, product_or_service_code_description, award_description))
iceDeten <- iceSelect %>% filter(awarding_office_name=="DETENTION COMPLIANCE AND REMOVALS")


unqLoc <- unique(iceSelect$recipient_city_name)

iceNames <- colnames(iceRaw)
View(iceNames)


write_json(iceSelect, "ice.json")
write_json(iceDeten, "iceDeten.json")
