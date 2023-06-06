var deleteDuplicates = function(head) {
    if(head==null ||head.next==null)
            return head;
       
        let ans=head;
       let prev=null;
    while(head)
        {
            let num=head.val;
            if(head.next!=null && head.val==head.next.val)
                {
                    while(head && head.val==num)
                        {
                            head=head.next;
                        }
                    if(prev)
                        {
                            prev.next=head;
                        }
                    else{
                        ans=head;
                    }
                    
                    continue;
                }
            prev=head;
            head=head.next;
        }
    return ans;
};
