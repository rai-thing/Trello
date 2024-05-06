"use client";
import { useQuery } from "@tanstack/react-query";
import { CardWithList } from "@/type";
import { fetcher } from "@/lib/fetcher";
import { AuditLog } from "@prisma/client";
import { useCardModal } from "@/hooks/use-card-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Header } from "./header";  
import { Description } from "./description";
import { Actions } from "./action";
import { Activity } from "./activity";
import { AddtoCard } from "./add-to-card";

export const CardModal = () => {
  const id = useCardModal((state) => state.id); 
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`), // Fixed URL interpolation
  });

  const { data: auditLogsData } = useQuery<AuditLog[]>({
    queryKey: ["card-logs", id],
    queryFn: () => fetcher(`/api/cards/${id}/logs`),
  });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        {!cardData
         ?<Header.Skeleton/>
         :  <Header data={cardData} />
        }
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
          <div className="col-span-3">
            <div className="w-full space-y-6">
              {!cardData
                ?<Description.Skeleton/>
                :<Description data={cardData}/>
              }
              {!auditLogsData
                ?<Description.Skeleton/>
                :<Activity items={auditLogsData}/>
              }
            </div>
          </div>
          <div className="md:col-span-1">
            {!cardData
              ?<AddtoCard.Skeleton/>
              :<AddtoCard items={cardData}/> 
            }
            {!cardData
              ?<Actions.Skeleton/>
              :<Actions data={cardData}/>
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );   
};
